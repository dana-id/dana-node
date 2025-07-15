import 'dotenv/config';
import { Oauth2UrlData } from "../models";
/**
 * Widget utility functions for the DANA Widget API
 */
export declare class WidgetUtils {
    /**
     * Generates a channelId in Jakarta time format (GMT+7): YYYYMMDDHHmmssSSSnnnnnnn
     * @returns The formatted channelId string
     */
    private static generateChannelId;
    /**
     * Generates a scopes string based on the environment
     * @returns The scopes string
     */
    private static generateScopes;
    /**
     * Generates an external ID or uses the provided one
     * @param externalId Optional external ID to use
     * @returns The external ID string
     */
    private static generateExternalId;
    /**
     * Generates a timestamp in Jakarta time (GMT+7) with format YYYY-MM-DDTHH:mm:ss+07:00
     * @returns formatted timestamp string
     */
    private static generateTimestamp;
    /**
     * Generates an OAuth URL for the DANA API using the provided data
     * @param data OAuth URL parameters
     * @returns Fully constructed OAuth URL
     */
    static generateOauthUrl(data: Oauth2UrlData): string;
}
/**
 * Export all utility functions
 */
export default WidgetUtils;
