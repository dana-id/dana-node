import 'dotenv/config'

import { Oauth2UrlData } from "../models";
import { RequiredError, DanaSignatureUtil } from "../../../runtime";
import { v4 as uuidv4 } from 'uuid';

/**
 * Widget utility functions for the DANA Widget API
 */
export class WidgetUtils {
    /**
     * Generates a channelId in Jakarta time format (GMT+7): YYYYMMDDHHmmssSSSnnnnnnn
     * @returns The formatted channelId string
     */
    private static generateChannelId(): string {
        // Generate channelId in Jakarta time format (GMT+7)
        const date = new Date();
        // Add 7 hours to get Jakarta time
        date.setHours(date.getHours() + 7);
        
        // Format: YYYYMMDDHHmmssSSSnnnnnnn
        // For nanoseconds part, we'll generate a random 7-digit number since JS doesn't have nanosecond precision
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
        const nanopart = String(Math.floor(Math.random() * 10000000)).padStart(7, '0');
        
        return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${nanopart}`;
    }

    /**
     * Generates a scopes string based on the environment
     * @returns The scopes string
     */
    private static generateScopes(): string {
        const env = process.env.ENV || 'sandbox';
        if (!env) {
            throw new RequiredError(
                'generateScopes - generateOauthUrl',
                'ENV is not defined'
            );
        }

        if (env.toLowerCase() !== 'production') {
            return 'CASHIER,AGREEMENT_PAY,QUERY_BALANCE,DEFAULT_BASIC_PROFILE,MINI_DANA';
        } else {
            return 'CASHIER'
        }
    }

    /**
     * Generates an external ID or uses the provided one
     * @param externalId Optional external ID to use
     * @returns The external ID string
     */
    private static generateExternalId(externalId?: string): string {
        if (externalId) {
            return externalId;
        }
        
        return uuidv4();
    }

    /**
     * Generates a timestamp in Jakarta time (GMT+7) with format YYYY-MM-DDTHH:mm:ss+07:00
     * @returns formatted timestamp string
     */
    private static generateTimestamp(): string {
        const date = new Date();
        date.setHours(date.getHours() + 7);
        
        const isoString = date.toISOString().replace('Z', '+07:00');
        
        return isoString;
    }
    /**
     * Generates an OAuth URL for the DANA API using the provided data
     * @param data OAuth URL parameters
     * @returns Fully constructed OAuth URL
     */
    static generateOauthUrl(data: Oauth2UrlData): string {
    
    const env = process.env.ENV || 'sandbox';
    if (!env) {
        throw new RequiredError(
            'generateOauthUrl',
            'ENV is not defined'
        );
    }

    const baseUrl = env === 'sandbox' ? 'https://m.sandbox.dana.id/n/ipg/oauth' : 'https://m.dana.id/n/ipg/oauth';

    const partnerId = process.env.X_PARTNER_ID;
    if (!partnerId) {
        throw new RequiredError(
            'generateOauthUrl',
            'X_PARTNER_ID is not defined'
        );
    }

    // Use provided state or generate a new one
    const state = data.state || uuidv4();
    
    // Generate channel ID in Jakarta time format
    const channelId = WidgetUtils.generateChannelId();

    const scopes = WidgetUtils.generateScopes();

    const externalId = WidgetUtils.generateExternalId(data.externalId);

    const merchantId = data.merchantId;
    
    // Always generate a fresh timestamp in Jakarta time format
    const timestamp = WidgetUtils.generateTimestamp();

    // Build URL with required parameters
    let url = `${baseUrl}?partnerId=${partnerId}&scopes=${scopes}&externalId=${externalId}&channelId=${channelId}&redirectUrl=${encodeURIComponent(data.redirectUrl)}&timestamp=${encodeURIComponent(timestamp)}&state=${state}&isSnapBI=true`;
    
    if (merchantId) {
        url += `&merchantId=${encodeURIComponent(merchantId)}`;
    }
    
    if (data.subMerchantId) {
        url += `&subMerchantId=${encodeURIComponent(data.subMerchantId)}`;
    }
    
    if (data.lang) {
        url += `&lang=${encodeURIComponent(data.lang)}`;
    }
    
    if (data.allowRegistration) {
        url += `&allowRegistration=${encodeURIComponent(data.allowRegistration)}`;
    }
    
    if (data.seamlessData) {
        // Convert seamlessData object to JSON string and encode it
        const seamlessDataStr = encodeURIComponent(JSON.stringify(data.seamlessData));
        url += `&seamlessData=${seamlessDataStr}`;
        
        // Get private key from environment
        const privateKey = process.env.PRIVATE_KEY;
        if (privateKey) {
            // Calculate the seamlessSign if private key is available
            const seamlessSign = DanaSignatureUtil.generateSeamlessSign(data.seamlessData, privateKey);
            if (seamlessSign) {
                url += `&seamlessSign=${seamlessSign}`;
            }
        }
    }

    return url;
  }
}

/**
 * Export all utility functions
 */
export default WidgetUtils;
