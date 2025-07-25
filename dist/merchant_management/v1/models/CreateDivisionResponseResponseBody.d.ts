/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
import type { ResultInfo } from './ResultInfo';
/**
 *
 * @export
 * @interface CreateDivisionResponseResponseBody
 */
export interface CreateDivisionResponseResponseBody {
    /**
     *
     * @type {ResultInfo}
     * @memberof CreateDivisionResponseResponseBody
     */
    resultInfo: ResultInfo;
    /**
     * Division identifier. Present when successfully processed
     * @type {string}
     * @memberof CreateDivisionResponseResponseBody
     */
    divisionId?: string;
}
/**
 * Check if a given object implements the CreateDivisionResponseResponseBody interface.
 */
export declare function instanceOfCreateDivisionResponseResponseBody(value: object): value is CreateDivisionResponseResponseBody;
export declare function CreateDivisionResponseResponseBodyFromJSON(json: any): CreateDivisionResponseResponseBody;
export declare function CreateDivisionResponseResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDivisionResponseResponseBody;
export declare function CreateDivisionResponseResponseBodyToJSON(json: any): CreateDivisionResponseResponseBody;
export declare function CreateDivisionResponseResponseBodyToJSONTyped(value?: CreateDivisionResponseResponseBody | null, ignoreDiscriminator?: boolean): any;
export declare function validateCreateDivisionResponseResponseBody(value: CreateDivisionResponseResponseBody): ValidationErrorContext[];
