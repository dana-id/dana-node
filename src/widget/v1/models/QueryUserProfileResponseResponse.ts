/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { QueryUserProfileResponseResponseHead } from './QueryUserProfileResponseResponseHead';
import {
    validateQueryUserProfileResponseResponseHead,
    QueryUserProfileResponseResponseHeadFromJSON,
    QueryUserProfileResponseResponseHeadFromJSONTyped,
    QueryUserProfileResponseResponseHeadToJSON,
    QueryUserProfileResponseResponseHeadToJSONTyped,
} from './QueryUserProfileResponseResponseHead';
import type { QueryUserProfileResponseResponseBody } from './QueryUserProfileResponseResponseBody';
import {
    validateQueryUserProfileResponseResponseBody,
    QueryUserProfileResponseResponseBodyFromJSON,
    QueryUserProfileResponseResponseBodyFromJSONTyped,
    QueryUserProfileResponseResponseBodyToJSON,
    QueryUserProfileResponseResponseBodyToJSONTyped,
} from './QueryUserProfileResponseResponseBody';

/**
 * 
 * @export
 * @interface QueryUserProfileResponseResponse
 */
export interface QueryUserProfileResponseResponse {
    /**
     * 
     * @type {QueryUserProfileResponseResponseHead}
     * @memberof QueryUserProfileResponseResponse
     */
    head: QueryUserProfileResponseResponseHead;
    /**
     * 
     * @type {QueryUserProfileResponseResponseBody}
     * @memberof QueryUserProfileResponseResponse
     */
    body: QueryUserProfileResponseResponseBody;
}

/**
 * Check if a given object implements the QueryUserProfileResponseResponse interface.
 */
export function instanceOfQueryUserProfileResponseResponse(value: object): value is QueryUserProfileResponseResponse {
    if (!('head' in value) || value['head'] === undefined) return false;
    if (!('body' in value) || value['body'] === undefined) return false;
    return true;
}

export function QueryUserProfileResponseResponseFromJSON(json: any): QueryUserProfileResponseResponse {
    return QueryUserProfileResponseResponseFromJSONTyped(json, false);
}

export function QueryUserProfileResponseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryUserProfileResponseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'head': QueryUserProfileResponseResponseHeadFromJSON(json['head']),
        'body': QueryUserProfileResponseResponseBodyFromJSON(json['body']),
    };
}

export function QueryUserProfileResponseResponseToJSON(json: any): QueryUserProfileResponseResponse {
    return QueryUserProfileResponseResponseToJSONTyped(json, false);
}

export function QueryUserProfileResponseResponseToJSONTyped(value?: QueryUserProfileResponseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'head': QueryUserProfileResponseResponseHeadToJSON(value['head']),
        'body': QueryUserProfileResponseResponseBodyToJSON(value['body']),
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
}

export function validateQueryUserProfileResponseResponse(value: QueryUserProfileResponseResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...validateQueryUserProfileResponseResponseHead(value.head));

    validationErrorContexts.push(...validateQueryUserProfileResponseResponseBody(value.body));

    return validationErrorContexts;
}
