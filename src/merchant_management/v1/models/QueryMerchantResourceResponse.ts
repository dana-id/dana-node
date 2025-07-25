/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { QueryMerchantResourceResponseResponse } from './QueryMerchantResourceResponseResponse';
import {
    validateQueryMerchantResourceResponseResponse,
    QueryMerchantResourceResponseResponseFromJSON,
    QueryMerchantResourceResponseResponseFromJSONTyped,
    QueryMerchantResourceResponseResponseToJSON,
    QueryMerchantResourceResponseResponseToJSONTyped,
} from './QueryMerchantResourceResponseResponse';

/**
 * 
 * @export
 * @interface QueryMerchantResourceResponse
 */
export interface QueryMerchantResourceResponse {
    /**
     * 
     * @type {QueryMerchantResourceResponseResponse}
     * @memberof QueryMerchantResourceResponse
     */
    response: QueryMerchantResourceResponseResponse;
}

/**
 * Check if a given object implements the QueryMerchantResourceResponse interface.
 */
export function instanceOfQueryMerchantResourceResponse(value: object): value is QueryMerchantResourceResponse {
    if (!('response' in value) || value['response'] === undefined) return false;
    return true;
}

export function QueryMerchantResourceResponseFromJSON(json: any): QueryMerchantResourceResponse {
    return QueryMerchantResourceResponseFromJSONTyped(json, false);
}

export function QueryMerchantResourceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryMerchantResourceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': QueryMerchantResourceResponseResponseFromJSON(json['response']),
    };
}

export function QueryMerchantResourceResponseToJSON(json: any): QueryMerchantResourceResponse {
    return QueryMerchantResourceResponseToJSONTyped(json, false);
}

export function QueryMerchantResourceResponseToJSONTyped(value?: QueryMerchantResourceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'response': QueryMerchantResourceResponseResponseToJSON(value['response']),
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
}

export function validateQueryMerchantResourceResponse(value: QueryMerchantResourceResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...validateQueryMerchantResourceResponseResponse(value.response));

    return validationErrorContexts;
}
