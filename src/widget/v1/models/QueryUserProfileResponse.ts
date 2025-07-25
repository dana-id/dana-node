/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { QueryUserProfileResponseResponse } from './QueryUserProfileResponseResponse';
import {
    validateQueryUserProfileResponseResponse,
    QueryUserProfileResponseResponseFromJSON,
    QueryUserProfileResponseResponseFromJSONTyped,
    QueryUserProfileResponseResponseToJSON,
    QueryUserProfileResponseResponseToJSONTyped,
} from './QueryUserProfileResponseResponse';

/**
 * 
 * @export
 * @interface QueryUserProfileResponse
 */
export interface QueryUserProfileResponse {
    /**
     * 
     * @type {QueryUserProfileResponseResponse}
     * @memberof QueryUserProfileResponse
     */
    response: QueryUserProfileResponseResponse;
    /**
     * Signature string
     * @type {string}
     * @memberof QueryUserProfileResponse
     */
    signature?: string;
}

/**
 * Check if a given object implements the QueryUserProfileResponse interface.
 */
export function instanceOfQueryUserProfileResponse(value: object): value is QueryUserProfileResponse {
    if (!('response' in value) || value['response'] === undefined) return false;
    return true;
}

export function QueryUserProfileResponseFromJSON(json: any): QueryUserProfileResponse {
    return QueryUserProfileResponseFromJSONTyped(json, false);
}

export function QueryUserProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryUserProfileResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': QueryUserProfileResponseResponseFromJSON(json['response']),
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function QueryUserProfileResponseToJSON(json: any): QueryUserProfileResponse {
    return QueryUserProfileResponseToJSONTyped(json, false);
}

export function QueryUserProfileResponseToJSONTyped(value?: QueryUserProfileResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'response': QueryUserProfileResponseResponseToJSON(value['response']),
        'signature': value['signature'],
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
}

export function validateQueryUserProfileResponse(value: QueryUserProfileResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...validateQueryUserProfileResponseResponse(value.response));

    return validationErrorContexts;
}
