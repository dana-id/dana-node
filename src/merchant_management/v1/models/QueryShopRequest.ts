/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
/**
 * 
 * @export
 * @interface QueryShopRequest
 */
export interface QueryShopRequest {
    /**
     * Merchant identifier. Required when shopIdType is EXTERNAL_ID
     * @type {string}
     * @memberof QueryShopRequest
     */
    merchantId?: string;
    /**
     * Shop identifier. Length depends on shopIdType - INNER_ID (21 max), EXTERNAL_ID (64 max)
     * @type {string}
     * @memberof QueryShopRequest
     */
    shopId: string;
    /**
     * Shop identifier type
     * @type {string}
     * @memberof QueryShopRequest
     */
    shopIdType: QueryShopRequestShopIdTypeEnum;
}


/**
 * @export
 */
export const QueryShopRequestShopIdTypeEnum = {
    InnerId: 'INNER_ID',
    ExternalId: 'EXTERNAL_ID'
} as const;
export type QueryShopRequestShopIdTypeEnum = typeof QueryShopRequestShopIdTypeEnum[keyof typeof QueryShopRequestShopIdTypeEnum] | '';


/**
 * Check if a given object implements the QueryShopRequest interface.
 */
export function instanceOfQueryShopRequest(value: object): value is QueryShopRequest {
    if (!('shopId' in value) || value['shopId'] === undefined) return false;
    if (!('shopIdType' in value) || value['shopIdType'] === undefined) return false;
    return true;
}

export function QueryShopRequestFromJSON(json: any): QueryShopRequest {
    return QueryShopRequestFromJSONTyped(json, false);
}

export function QueryShopRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryShopRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'merchantId': json['merchantId'] == null ? undefined : json['merchantId'],
        'shopId': json['shopId'],
        'shopIdType': json['shopIdType'],
    };
}

export function QueryShopRequestToJSON(json: any): QueryShopRequest {
    return QueryShopRequestToJSONTyped(json, false);
}

export function QueryShopRequestToJSONTyped(value?: QueryShopRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'merchantId': value['merchantId'],
        'shopId': value['shopId'],
        'shopIdType': value['shopIdType'],
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
    merchantId: {
        maxLength: 21,
    },
}

export function validateQueryShopRequest(value: QueryShopRequest): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('merchantId', value.merchantId, propertyValidationAttributesMap['merchantId']));

    return validationErrorContexts;
}
