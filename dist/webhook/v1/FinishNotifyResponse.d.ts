/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../runtime';
/**
 *
 * @export
 * @interface FinishNotifyResponse
 */
export interface FinishNotifyResponse {
    /**
     * Response code. Refer to https://dashboard.dana.id/api-docs/read/123#HTML-API-FinishNotify-ResponseCodeandMessage
     * @type {string}
     * @memberof FinishNotifyResponse
     */
    responseCode: string;
    /**
     * Response message. Refer to https://dashboard.dana.id/api-docs/read/123#HTML-API-FinishNotify-ResponseCodeandMessage
     * @type {string}
     * @memberof FinishNotifyResponse
     */
    responseMessage: string;
}
/**
 * Check if a given object implements the FinishNotifyResponse interface.
 */
export declare function instanceOfFinishNotifyResponse(value: object): value is FinishNotifyResponse;
export declare function FinishNotifyResponseFromJSON(json: any): FinishNotifyResponse;
export declare function FinishNotifyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinishNotifyResponse;
export declare function FinishNotifyResponseToJSON(json: any): FinishNotifyResponse;
export declare function FinishNotifyResponseToJSONTyped(value?: FinishNotifyResponse | null, ignoreDiscriminator?: boolean): any;
export declare function validateFinishNotifyResponse(value: FinishNotifyResponse): ValidationErrorContext[];
