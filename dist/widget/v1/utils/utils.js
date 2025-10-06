"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetUtils = void 0;
require("dotenv/config");
// Ensure uuid is installed: npm install uuid @types/uuid
const uuid_1 = require("uuid");
const models_1 = require("../models");
const runtime_1 = require("../../../runtime");
const runtime_2 = require("../../../runtime");
/**
 * Widget utility functions for the DANA Widget API
 */
class WidgetUtils {
    /**
     * Generates a channelId in Jakarta time format (GMT+7): YYYYMMDDHHmmssSSSnnnnnnn
     * @returns The formatted channelId string
     */
    static generateChannelId() {
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
    static generateScopes() {
        const env = process.env.DANA_ENV || process.env.ENV || runtime_2.Env.SANDBOX;
        if (!env) {
            throw new runtime_1.RequiredError('generateScopes - generateOauthUrl', 'DANA_ENV or ENV is not defined');
        }
        if (env.toLowerCase() !== runtime_2.Env.PRODUCTION) {
            return 'CASHIER,AGREEMENT_PAY,QUERY_BALANCE,DEFAULT_BASIC_PROFILE,MINI_DANA';
        }
        else {
            return 'CASHIER';
        }
    }
    /**
     * Generates an external ID or uses the provided one
     * @param externalId Optional external ID to use
     * @returns The external ID string
     */
    static generateExternalId(externalId) {
        if (externalId) {
            return externalId;
        }
        return (0, uuid_1.v4)();
    }
    /**
     * Generates a timestamp in Jakarta time (GMT+7) with format YYYY-MM-DDTHH:mm:ss+07:00
     * @returns formatted timestamp string
     */
    static generateTimestamp() {
        const date = new Date();
        date.setHours(date.getHours() + 7);
        const isoString = date.toISOString().replace('Z', '+07:00');
        return isoString;
    }
    /**
     * Generates an OAuth URL for the DANA API using the provided data
     * @param data OAuth URL parameters
     * @param privateKey Optional private key content
     * @returns Fully constructed OAuth URL
     */
    static generateOauthUrl(data, privateKey) {
        const env = process.env.DANA_ENV || process.env.ENV || runtime_2.Env.SANDBOX;
        if (!env) {
            throw new runtime_1.RequiredError('generateOauthUrl', 'DANA_ENV or ENV is not defined');
        }
        // Determine mode, default to API
        const mode = data.mode || models_1.Oauth2UrlDataModeEnum.Api;
        // Set base URL based on mode and environment
        let baseUrl;
        if (mode === models_1.Oauth2UrlDataModeEnum.Deeplink) {
            if (env.toLowerCase() === runtime_2.Env.PRODUCTION) {
                baseUrl = 'https://link.dana.id/bindSnap';
            }
            else {
                baseUrl = 'https://m.sandbox.dana.id/n/link/binding';
            }
        }
        else { // Mode.API
            if (env.toLowerCase() === runtime_2.Env.PRODUCTION) {
                baseUrl = 'https://m.dana.id/v1.0/get-auth-code';
            }
            else {
                baseUrl = 'https://m.sandbox.dana.id/v1.0/get-auth-code';
            }
        }
        const partnerId = process.env.X_PARTNER_ID;
        if (!partnerId) {
            throw new runtime_1.RequiredError('generateOauthUrl', 'X_PARTNER_ID is not defined');
        }
        // Use provided state or generate a new one
        const state = data.state || (0, uuid_1.v4)();
        // Generate channel ID in Jakarta time format
        const channelId = WidgetUtils.generateChannelId();
        const scopes = data.scopes || WidgetUtils.generateScopes();
        const externalId = WidgetUtils.generateExternalId(data.externalId);
        const merchantId = data.merchantId;
        // Always generate a fresh timestamp in Jakarta time format
        const timestamp = WidgetUtils.generateTimestamp();
        // URL parameters object to be built based on mode
        let urlParams = {};
        // Generate a request ID for DEEPLINK mode
        let requestId;
        if (mode === models_1.Oauth2UrlDataModeEnum.Deeplink) {
            requestId = (0, uuid_1.v4)();
            // Build DEEPLINK mode parameters
            urlParams = {
                partnerId,
                scopes: typeof scopes === 'string' ? scopes : scopes.join(','),
                terminalType: "WEB",
                externalId,
                requestId: requestId,
                redirectUrl: data.redirectUrl || '',
                state
            };
        }
        else { // Mode.API
            // Build API mode parameters
            urlParams = {
                partnerId,
                scopes: typeof scopes === 'string' ? scopes : scopes.join(','),
                externalId,
                channelId,
                redirectUrl: data.redirectUrl || '',
                timestamp,
                state,
                isSnapBI: 'true'
            };
            // Add merchant ID if provided and in API mode
            if (merchantId) {
                urlParams.merchantId = merchantId;
            }
            // Add subMerchantId if provided and in API mode
            if (data.subMerchantId) {
                urlParams.subMerchantId = data.subMerchantId;
            }
            // Add lang if provided and in API mode
            if (data.lang) {
                urlParams.lang = data.lang;
            }
            // Add allowRegistration if provided and in API mode
            if (data.allowRegistration !== undefined) {
                urlParams.allowRegistration = data.allowRegistration.toString();
            }
        }
        // Handle seamless data if provided
        if (data.seamlessData) {
            // Deep clone the seamless data
            let seamlessDataObj = JSON.parse(JSON.stringify(data.seamlessData));
            // Process for DEEPLINK mode
            if (mode === models_1.Oauth2UrlDataModeEnum.Deeplink && requestId) {
                // Convert mobileNumber to mobile if needed
                if (seamlessDataObj.mobileNumber) {
                    seamlessDataObj.mobile = seamlessDataObj.mobileNumber;
                    delete seamlessDataObj.mobileNumber;
                }
                // Add required fields for DEEPLINK mode
                seamlessDataObj.externalUid = externalId;
                seamlessDataObj.reqTime = timestamp;
                seamlessDataObj.verifiedTime = "0";
                seamlessDataObj.reqMsgId = requestId;
            }
            // Convert to JSON string
            const seamlessDataStr = JSON.stringify(seamlessDataObj);
            urlParams.seamlessData = seamlessDataStr;
            // Get private key from parameter or environment
            const pk = privateKey || process.env.PRIVATE_KEY;
            if (pk) {
                // Calculate the seamlessSign if private key is available
                const seamlessSign = runtime_1.DanaSignatureUtil.generateSeamlessSign(seamlessDataObj, pk);
                if (seamlessSign) {
                    urlParams.seamlessSign = seamlessSign;
                }
            }
        }
        // Build the final URL
        const queryString = Object.entries(urlParams)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');
        return `${baseUrl}?${queryString}`;
    }
    static generateCompletePaymentUrl(widgetPaymentResponse, applyOTTResponse) {
        var _a;
        // Check if both parameters are defined
        if (!widgetPaymentResponse || !applyOTTResponse) {
            return "";
        }
        // Check if webRedirectUrl exists
        const webRedirectUrl = widgetPaymentResponse.webRedirectUrl;
        if (!webRedirectUrl) {
            return "";
        }
        // Check if userResources exists and has elements
        if (!applyOTTResponse.userResources || applyOTTResponse.userResources.length === 0) {
            return webRedirectUrl;
        }
        // Check if the first userResource has a value property
        const ottValue = (_a = applyOTTResponse.userResources[0]) === null || _a === void 0 ? void 0 : _a.value;
        if (!ottValue) {
            return webRedirectUrl;
        }
        // Combine the URL with the OTT token
        return `${webRedirectUrl}&ott=${ottValue}`;
    }
}
exports.WidgetUtils = WidgetUtils;
/**
 * Export all utility functions
 */
exports.default = WidgetUtils;
