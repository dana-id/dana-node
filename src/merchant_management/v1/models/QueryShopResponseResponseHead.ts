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
 * @interface QueryShopResponseResponseHead
 */
export interface QueryShopResponseResponseHead {
    /**
     * API version
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    version?: string;
    /**
     * API interface
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    _function?: QueryShopResponseResponseHeadFunctionEnum;
    /**
     * Client ID provided by DANA, used to identify partner and application system
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    clientId?: string;
    /**
     * Response time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time)
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    respTime?: string;
    /**
     * Request message ID
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    reqMsgId?: string;
    /**
     * As a secret key of client. Assigned client secret during registration
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    clientSecret?: string;
    /**
     * Reserved for future implementation (Key/Value)
     * @type {string}
     * @memberof QueryShopResponseResponseHead
     */
    reserve?: string;
}


/**
 * @export
 */
export const QueryShopResponseResponseHeadFunctionEnum = {
    DanaMerchantShopQueryShop: 'dana.merchant.shop.queryShop'
} as const;
export type QueryShopResponseResponseHeadFunctionEnum = typeof QueryShopResponseResponseHeadFunctionEnum[keyof typeof QueryShopResponseResponseHeadFunctionEnum] | '';


/**
 * Check if a given object implements the QueryShopResponseResponseHead interface.
 */
export function instanceOfQueryShopResponseResponseHead(value: object): value is QueryShopResponseResponseHead {
    return true;
}

export function QueryShopResponseResponseHeadFromJSON(json: any): QueryShopResponseResponseHead {
    return QueryShopResponseResponseHeadFromJSONTyped(json, false);
}

export function QueryShopResponseResponseHeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryShopResponseResponseHead {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        '_function': json['function'] == null ? undefined : json['function'],
        'clientId': json['clientId'] == null ? undefined : json['clientId'],
        'respTime': json['respTime'] == null ? undefined : json['respTime'],
        'reqMsgId': json['reqMsgId'] == null ? undefined : json['reqMsgId'],
        'clientSecret': json['clientSecret'] == null ? undefined : json['clientSecret'],
        'reserve': json['reserve'] == null ? undefined : json['reserve'],
    };
}

export function QueryShopResponseResponseHeadToJSON(json: any): QueryShopResponseResponseHead {
    return QueryShopResponseResponseHeadToJSONTyped(json, false);
}

export function QueryShopResponseResponseHeadToJSONTyped(value?: QueryShopResponseResponseHead | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'function': value['_function'],
        'clientId': value['clientId'],
        'respTime': value['respTime'],
        'reqMsgId': value['reqMsgId'],
        'clientSecret': value['clientSecret'],
        'reserve': value['reserve'],
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
    version: {
        maxLength: 8,
    },
    _function: {
        maxLength: 128,
    },
    clientId: {
        maxLength: 36,
    },
    respTime: {
        maxLength: 25,
    },
    reqMsgId: {
        maxLength: 64,
    },
    clientSecret: {
        maxLength: 64,
    },
    reserve: {
        maxLength: 256,
    },
}

export function validateQueryShopResponseResponseHead(value: QueryShopResponseResponseHead): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('version', value.version, propertyValidationAttributesMap['version']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('_function', value._function, propertyValidationAttributesMap['_function']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('clientId', value.clientId, propertyValidationAttributesMap['clientId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('respTime', value.respTime, propertyValidationAttributesMap['respTime']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('reqMsgId', value.reqMsgId, propertyValidationAttributesMap['reqMsgId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('clientSecret', value.clientSecret, propertyValidationAttributesMap['clientSecret']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('reserve', value.reserve, propertyValidationAttributesMap['reserve']));

    return validationErrorContexts;
}
