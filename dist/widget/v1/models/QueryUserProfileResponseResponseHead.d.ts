/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
/**
 *
 * @export
 * @interface QueryUserProfileResponseResponseHead
 */
export interface QueryUserProfileResponseResponseHead {
    /**
     * API version
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    version?: string;
    /**
     * API interface
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    _function?: QueryUserProfileResponseResponseHeadFunctionEnum;
    /**
     * Client ID provided by DANA, used to identify partner and application system
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    clientId?: string;
    /**
     * Response time, dateTime with timezone, which follows the ISO-8601 standard. Refer to RFC 3339 Section 5.6
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    respTime?: string;
    /**
     * Each request will be assigned with a unique id (uuid)
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    reqMsgId?: string;
    /**
     * Reserved for future implementation (Key/Value)
     * @type {string}
     * @memberof QueryUserProfileResponseResponseHead
     */
    reserve?: string;
}
/**
 * @export
 */
export declare const QueryUserProfileResponseResponseHeadFunctionEnum: {
    readonly DanaMemberQueryQueryUserProfile: "dana.member.query.queryUserProfile";
};
export type QueryUserProfileResponseResponseHeadFunctionEnum = typeof QueryUserProfileResponseResponseHeadFunctionEnum[keyof typeof QueryUserProfileResponseResponseHeadFunctionEnum] | '';
/**
 * Check if a given object implements the QueryUserProfileResponseResponseHead interface.
 */
export declare function instanceOfQueryUserProfileResponseResponseHead(value: object): value is QueryUserProfileResponseResponseHead;
export declare function QueryUserProfileResponseResponseHeadFromJSON(json: any): QueryUserProfileResponseResponseHead;
export declare function QueryUserProfileResponseResponseHeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryUserProfileResponseResponseHead;
export declare function QueryUserProfileResponseResponseHeadToJSON(json: any): QueryUserProfileResponseResponseHead;
export declare function QueryUserProfileResponseResponseHeadToJSONTyped(value?: QueryUserProfileResponseResponseHead | null, ignoreDiscriminator?: boolean): any;
export declare function validateQueryUserProfileResponseResponseHead(value: QueryUserProfileResponseResponseHead): ValidationErrorContext[];
