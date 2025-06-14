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
 * @interface AccountUnbindingResponse
 */
export interface AccountUnbindingResponse {
    /**
     * Response code. Refer to https://dashboard.dana.id/api-docs/read/108#HTML-AccountUnbinding-ResponseCodeandMessage
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    responseCode: string;
    /**
     * Response message. Refer to https://dashboard.dana.id/api-docs/read/108#HTML-AccountUnbinding-ResponseCodeandMessage
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    responseMessage: string;
    /**
     * Transaction identifier on DANA system
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    referenceNo?: string;
    /**
     * Unique transaction identifier on partner system which assigned to each transaction
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    partnerReferenceNo?: string;
    /**
     * Merchant identifier that is unique per each merchant
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    merchantId?: string;
    /**
     * Information of sub merchant identifier
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    subMerchantId?: string;
    /**
     * Information of link identifier
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    linkId?: string;
    /**
     * Result of unlinking process
     * @type {string}
     * @memberof AccountUnbindingResponse
     */
    unlinkResult?: string;
    /**
     * Additional information
     * @type {object}
     * @memberof AccountUnbindingResponse
     */
    additionalInfo?: object;
}

/**
 * Check if a given object implements the AccountUnbindingResponse interface.
 */
export function instanceOfAccountUnbindingResponse(value: object): value is AccountUnbindingResponse {
    if (!('responseCode' in value) || value['responseCode'] === undefined) return false;
    if (!('responseMessage' in value) || value['responseMessage'] === undefined) return false;
    return true;
}

export function AccountUnbindingResponseFromJSON(json: any): AccountUnbindingResponse {
    return AccountUnbindingResponseFromJSONTyped(json, false);
}

export function AccountUnbindingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountUnbindingResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'responseCode': json['responseCode'],
        'responseMessage': json['responseMessage'],
        'referenceNo': json['referenceNo'] == null ? undefined : json['referenceNo'],
        'partnerReferenceNo': json['partnerReferenceNo'] == null ? undefined : json['partnerReferenceNo'],
        'merchantId': json['merchantId'] == null ? undefined : json['merchantId'],
        'subMerchantId': json['subMerchantId'] == null ? undefined : json['subMerchantId'],
        'linkId': json['linkId'] == null ? undefined : json['linkId'],
        'unlinkResult': json['unlinkResult'] == null ? undefined : json['unlinkResult'],
        'additionalInfo': json['additionalInfo'] == null ? undefined : json['additionalInfo'],
    };
}

export function AccountUnbindingResponseToJSON(json: any): AccountUnbindingResponse {
    return AccountUnbindingResponseToJSONTyped(json, false);
}

export function AccountUnbindingResponseToJSONTyped(value?: AccountUnbindingResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'responseCode': value['responseCode'],
        'responseMessage': value['responseMessage'],
        'referenceNo': value['referenceNo'],
        'partnerReferenceNo': value['partnerReferenceNo'],
        'merchantId': value['merchantId'],
        'subMerchantId': value['subMerchantId'],
        'linkId': value['linkId'],
        'unlinkResult': value['unlinkResult'],
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
    merchantId: {
        maxLength: 64,
    },
    subMerchantId: {
        maxLength: 32,
    },
    linkId: {
        maxLength: 24,
    },
    unlinkResult: {
        maxLength: 64,
    },
}

export function validateAccountUnbindingResponse(value: AccountUnbindingResponse): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('responseCode', value.responseCode, propertyValidationAttributesMap['responseCode']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('responseMessage', value.responseMessage, propertyValidationAttributesMap['responseMessage']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('referenceNo', value.referenceNo, propertyValidationAttributesMap['referenceNo']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('partnerReferenceNo', value.partnerReferenceNo, propertyValidationAttributesMap['partnerReferenceNo']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('merchantId', value.merchantId, propertyValidationAttributesMap['merchantId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('subMerchantId', value.subMerchantId, propertyValidationAttributesMap['subMerchantId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('linkId', value.linkId, propertyValidationAttributesMap['linkId']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('unlinkResult', value.unlinkResult, propertyValidationAttributesMap['unlinkResult']));

    return validationErrorContexts;
}
