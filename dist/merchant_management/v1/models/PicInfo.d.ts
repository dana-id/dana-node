/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
/**
 *
 * @export
 * @interface PicInfo
 */
export interface PicInfo {
    /**
     * PIC name
     * @type {string}
     * @memberof PicInfo
     */
    picName?: string;
    /**
     * PIC position
     * @type {string}
     * @memberof PicInfo
     */
    picPosition?: string;
}
/**
 * Check if a given object implements the PicInfo interface.
 */
export declare function instanceOfPicInfo(value: object): value is PicInfo;
export declare function PicInfoFromJSON(json: any): PicInfo;
export declare function PicInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PicInfo;
export declare function PicInfoToJSON(json: any): PicInfo;
export declare function PicInfoToJSONTyped(value?: PicInfo | null, ignoreDiscriminator?: boolean): any;
export declare function validatePicInfo(value: PicInfo): ValidationErrorContext[];
