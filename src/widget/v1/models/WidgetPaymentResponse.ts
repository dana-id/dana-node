/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
/**
 * Response object for Direct Debit Payment API
 * @export
 * @interface WidgetPaymentResponse
 */
export interface WidgetPaymentResponse {
    /**
     * Refer to response code list:<br>
     * * 2005400 - Successful<br>
     * * 4005400 - Bad Request - Retry request with proper parameter<br>
     * * 4005401 - Invalid Field Format - Retry request with proper parameter<br>
     * * 4005402 - Invalid Mandatory Field - Retry request with proper parameter<br>
     * * 4015400 - Unauthorized. [reason] - Retry request with proper parameter<br>
     * * 4035402 - Exceeds Transaction Amount Limit - Try to adjust the order amount<br>
     * * 4035405 - Do Not Honor - Retry request with proper parameter or can contact DANA to check the user/account status<br>
     * * 4035415 - Transaction Not Permitted - Retry request periodically or consult to DANA<br>
     * * 4045408 - Invalid Merchant - Retry request with proper parameter<br>
     * * 4045418 - Inconsistent Request - Retry with proper parameter<br>
     * * 4295400 - Too Many Requests - Retry request periodically by sending same request payload<br>
     * * 5005400 - General Error - Retry request periodically<br>
     * * 5005401 - Internal Server Error - Retry request periodically by sending same request payload<br>
     * 
     * @type {string}
     * @memberof WidgetPaymentResponse
     */
    responseCode: string;
    /**
     * Human readable response message
     * @type {string}
     * @memberof WidgetPaymentResponse
     */
    responseMessage: string;
    /**
     * Transaction identifier on DANA system, returned when transaction is successfully processed
     * @type {string}
     * @memberof WidgetPaymentResponse
     */
    referenceNo?: string;
    /**
     * Transaction identifier on partner system which assigned to each transaction
     * @type {string}
     * @memberof WidgetPaymentResponse
     */
    partnerReferenceNo: string;
    /**
     * DANA checkout URL, returned when transaction is successfully processed
     * @type {string}
     * @memberof WidgetPaymentResponse
     */
    webRedirectUrl?: string;
    /**
     * Additional information
     * @type {{ [key: string]: any; }}
     * @memberof WidgetPaymentResponse
     */
    additionalInfo?: { [key: string]: any; };
}

/**
 * Check if a given object implements the WidgetPaymentResponse interface.
 */
export function instanceOfWidgetPaymentResponse(value: object): value is WidgetPaymentResponse {
    if (!('responseCode' in value) || value['responseCode'] === undefined) return false;
    if (!('responseMessage' in value) || value['responseMessage'] === undefined) return false;
    if (!('partnerReferenceNo' in value) || value['partnerReferenceNo'] === undefined) return false;
    return true;
}

export function WidgetPaymentResponseFromJSON(json: any): WidgetPaymentResponse {
    return WidgetPaymentResponseFromJSONTyped(json, false);
}

export function WidgetPaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WidgetPaymentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'responseCode': json['responseCode'],
        'responseMessage': json['responseMessage'],
        'referenceNo': json['referenceNo'] == null ? undefined : json['referenceNo'],
        'partnerReferenceNo': json['partnerReferenceNo'],
        'webRedirectUrl': json['webRedirectUrl'] == null ? undefined : json['webRedirectUrl'],
        'additionalInfo': json['additionalInfo'] == null ? undefined : json['additionalInfo'],
    };
}

export function WidgetPaymentResponseToJSON(json: any): WidgetPaymentResponse {
    return WidgetPaymentResponseToJSONTyped(json, false);
}

export function WidgetPaymentResponseToJSONTyped(value?: WidgetPaymentResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'responseCode': value['responseCode'],
        'responseMessage': value['responseMessage'],
        'referenceNo': value['referenceNo'],
        'partnerReferenceNo': value['partnerReferenceNo'],
        'webRedirectUrl': value['webRedirectUrl'],
        'additionalInfo': value['additionalInfo'],
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
    responseCode: {
        maxLength: 7,
    },
    responseMessage: {
        maxLength: 150,
    },
    referenceNo: {
        maxLength: 64,
    },
    partnerReferenceNo: {
        maxLength: 64,
    },
    webRedirectUrl: {
        maxLength: 2048,
    },
}

export function validateWidgetPaymentResponse(value: WidgetPaymentResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('responseCode', value.responseCode, propertyValidationAttributesMap['responseCode']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('responseMessage', value.responseMessage, propertyValidationAttributesMap['responseMessage']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('referenceNo', value.referenceNo, propertyValidationAttributesMap['referenceNo']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('partnerReferenceNo', value.partnerReferenceNo, propertyValidationAttributesMap['partnerReferenceNo']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('webRedirectUrl', value.webRedirectUrl, propertyValidationAttributesMap['webRedirectUrl']));

    return validationErrorContexts;
}
