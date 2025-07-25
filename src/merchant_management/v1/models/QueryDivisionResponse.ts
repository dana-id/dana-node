/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { QueryDivisionResponseResponse } from './QueryDivisionResponseResponse';
import {
    validateQueryDivisionResponseResponse,
    QueryDivisionResponseResponseFromJSON,
    QueryDivisionResponseResponseFromJSONTyped,
    QueryDivisionResponseResponseToJSON,
    QueryDivisionResponseResponseToJSONTyped,
} from './QueryDivisionResponseResponse';

/**
 * 
 * @export
 * @interface QueryDivisionResponse
 */
export interface QueryDivisionResponse {
    /**
     * 
     * @type {QueryDivisionResponseResponse}
     * @memberof QueryDivisionResponse
     */
    response: QueryDivisionResponseResponse;
    /**
     * Signature
     * @type {string}
     * @memberof QueryDivisionResponse
     */
    signature?: string;
}

/**
 * Check if a given object implements the QueryDivisionResponse interface.
 */
export function instanceOfQueryDivisionResponse(value: object): value is QueryDivisionResponse {
    if (!('response' in value) || value['response'] === undefined) return false;
    return true;
}

export function QueryDivisionResponseFromJSON(json: any): QueryDivisionResponse {
    return QueryDivisionResponseFromJSONTyped(json, false);
}

export function QueryDivisionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryDivisionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': QueryDivisionResponseResponseFromJSON(json['response']),
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function QueryDivisionResponseToJSON(json: any): QueryDivisionResponse {
    return QueryDivisionResponseToJSONTyped(json, false);
}

export function QueryDivisionResponseToJSONTyped(value?: QueryDivisionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'response': QueryDivisionResponseResponseToJSON(value['response']),
        'signature': value['signature'],
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
}

export function validateQueryDivisionResponse(value: QueryDivisionResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...validateQueryDivisionResponseResponse(value.response));

    return validationErrorContexts;
}
