/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
import type { UpdateDivisionResponseResponseBody } from './UpdateDivisionResponseResponseBody';
import type { UpdateShopResponseResponseHead } from './UpdateShopResponseResponseHead';
/**
 *
 * @export
 * @interface UpdateShopResponseResponse
 */
export interface UpdateShopResponseResponse {
    /**
     *
     * @type {UpdateShopResponseResponseHead}
     * @memberof UpdateShopResponseResponse
     */
    head: UpdateShopResponseResponseHead;
    /**
     *
     * @type {UpdateDivisionResponseResponseBody}
     * @memberof UpdateShopResponseResponse
     */
    body: UpdateDivisionResponseResponseBody;
}
/**
 * Check if a given object implements the UpdateShopResponseResponse interface.
 */
export declare function instanceOfUpdateShopResponseResponse(value: object): value is UpdateShopResponseResponse;
export declare function UpdateShopResponseResponseFromJSON(json: any): UpdateShopResponseResponse;
export declare function UpdateShopResponseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateShopResponseResponse;
export declare function UpdateShopResponseResponseToJSON(json: any): UpdateShopResponseResponse;
export declare function UpdateShopResponseResponseToJSONTyped(value?: UpdateShopResponseResponse | null, ignoreDiscriminator?: boolean): any;
export declare function validateUpdateShopResponseResponse(value: UpdateShopResponseResponse): ValidationErrorContext[];
