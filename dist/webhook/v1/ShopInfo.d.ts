/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../runtime';
/**
 *
 * @export
 * @interface ShopInfo
 */
export interface ShopInfo {
    /**
     * Information of shop identifier. Required if externalShopId is blank
     * @type {string}
     * @memberof ShopInfo
     */
    shopId?: string;
    /**
     * Information of external shop identifier. Required if shopId is blank
     * @type {string}
     * @memberof ShopInfo
     */
    externalShopId?: string;
    /**
     * Information of operator identifier
     * @type {string}
     * @memberof ShopInfo
     */
    operatorId?: string;
    /**
     * Information of shop address
     * @type {string}
     * @memberof ShopInfo
     */
    shopAddress?: string;
    /**
     * Information of division identifier
     * @type {string}
     * @memberof ShopInfo
     */
    divisionId?: string;
    /**
     * Information of external division identifier
     * @type {string}
     * @memberof ShopInfo
     */
    externalDivisionId?: string;
    /**
     * Information of division type
     * @type {string}
     * @memberof ShopInfo
     */
    divisionType?: string;
    /**
     * Information of shop name
     * @type {string}
     * @memberof ShopInfo
     */
    shopName?: string;
}
/**
 * Check if a given object implements the ShopInfo interface.
 */
export declare function instanceOfShopInfo(value: object): value is ShopInfo;
export declare function ShopInfoFromJSON(json: any): ShopInfo;
export declare function ShopInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopInfo;
export declare function ShopInfoToJSON(json: any): ShopInfo;
export declare function ShopInfoToJSONTyped(value?: ShopInfo | null, ignoreDiscriminator?: boolean): any;
export declare function validateShopInfo(value: ShopInfo): ValidationErrorContext[];
