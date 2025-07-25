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
export const QueryUserProfileResponseResponseHeadFunctionEnum = {
    DanaMemberQueryQueryUserProfile: 'dana.member.query.queryUserProfile'
} as const;
export type QueryUserProfileResponseResponseHeadFunctionEnum = typeof QueryUserProfileResponseResponseHeadFunctionEnum[keyof typeof QueryUserProfileResponseResponseHeadFunctionEnum] | '';


/**
 * Check if a given object implements the QueryUserProfileResponseResponseHead interface.
 */
export function instanceOfQueryUserProfileResponseResponseHead(value: object): value is QueryUserProfileResponseResponseHead {
    return true;
}

export function QueryUserProfileResponseResponseHeadFromJSON(json: any): QueryUserProfileResponseResponseHead {
    return QueryUserProfileResponseResponseHeadFromJSONTyped(json, false);
}

export function QueryUserProfileResponseResponseHeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryUserProfileResponseResponseHead {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        '_function': json['function'] == null ? undefined : json['function'],
        'clientId': json['clientId'] == null ? undefined : json['clientId'],
        'respTime': json['respTime'] == null ? undefined : json['respTime'],
        'reqMsgId': json['reqMsgId'] == null ? undefined : json['reqMsgId'],
        'reserve': json['reserve'] == null ? undefined : json['reserve'],
    };
}

export function QueryUserProfileResponseResponseHeadToJSON(json: any): QueryUserProfileResponseResponseHead {
    return QueryUserProfileResponseResponseHeadToJSONTyped(json, false);
}

export function QueryUserProfileResponseResponseHeadToJSONTyped(value?: QueryUserProfileResponseResponseHead | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'function': value['_function'],
        'clientId': value['clientId'],
        'respTime': value['respTime'],
        'reqMsgId': value['reqMsgId'],
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
        maxLength: 32,
    },
    reqMsgId: {
        maxLength: 64,
    },
    reserve: {
        maxLength: 256,
    },
}

export function validateQueryUserProfileResponseResponseHead(value: QueryUserProfileResponseResponseHead): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('version', value.version, propertyValidationAttributesMap['version']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('_function', value._function, propertyValidationAttributesMap['_function']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('clientId', value.clientId, propertyValidationAttributesMap['clientId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('reqMsgId', value.reqMsgId, propertyValidationAttributesMap['reqMsgId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('reserve', value.reserve, propertyValidationAttributesMap['reserve']));

    return validationErrorContexts;
}
