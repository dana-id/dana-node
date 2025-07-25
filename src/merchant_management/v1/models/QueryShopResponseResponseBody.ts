/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { ShopResourceInfo } from './ShopResourceInfo';
import {
    validateShopResourceInfo,
    ShopResourceInfoFromJSON,
    ShopResourceInfoFromJSONTyped,
    ShopResourceInfoToJSON,
    ShopResourceInfoToJSONTyped,
} from './ShopResourceInfo';
import type { ResultInfo } from './ResultInfo';
import {
    validateResultInfo,
    ResultInfoFromJSON,
    ResultInfoFromJSONTyped,
    ResultInfoToJSON,
    ResultInfoToJSONTyped,
} from './ResultInfo';

/**
 * 
 * @export
 * @interface QueryShopResponseResponseBody
 */
export interface QueryShopResponseResponseBody {
    /**
     * 
     * @type {ResultInfo}
     * @memberof QueryShopResponseResponseBody
     */
    resultInfo: ResultInfo;
    /**
     * 
     * @type {ShopResourceInfo}
     * @memberof QueryShopResponseResponseBody
     */
    shopResourceInfo?: ShopResourceInfo;
}

/**
 * Check if a given object implements the QueryShopResponseResponseBody interface.
 */
export function instanceOfQueryShopResponseResponseBody(value: object): value is QueryShopResponseResponseBody {
    if (!('resultInfo' in value) || value['resultInfo'] === undefined) return false;
    return true;
}

export function QueryShopResponseResponseBodyFromJSON(json: any): QueryShopResponseResponseBody {
    return QueryShopResponseResponseBodyFromJSONTyped(json, false);
}

export function QueryShopResponseResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryShopResponseResponseBody {
    if (json == null) {
        return json;
    }
    return {
        
        'resultInfo': ResultInfoFromJSON(json['resultInfo']),
        'shopResourceInfo': json['shopResourceInfo'] == null ? undefined : ShopResourceInfoFromJSON(json['shopResourceInfo']),
    };
}

export function QueryShopResponseResponseBodyToJSON(json: any): QueryShopResponseResponseBody {
    return QueryShopResponseResponseBodyToJSONTyped(json, false);
}

export function QueryShopResponseResponseBodyToJSONTyped(value?: QueryShopResponseResponseBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resultInfo': ResultInfoToJSON(value['resultInfo']),
        'shopResourceInfo': ShopResourceInfoToJSON(value['shopResourceInfo']),
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
}

export function validateQueryShopResponseResponseBody(value: QueryShopResponseResponseBody): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...validateResultInfo(value.resultInfo));

    validationErrorContexts.push(...validateShopResourceInfo(value.shopResourceInfo));

    return validationErrorContexts;
}
