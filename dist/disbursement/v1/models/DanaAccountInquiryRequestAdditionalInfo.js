"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanaAccountInquiryRequestAdditionalInfoChargeTargetEnum = void 0;
exports.instanceOfDanaAccountInquiryRequestAdditionalInfo = instanceOfDanaAccountInquiryRequestAdditionalInfo;
exports.DanaAccountInquiryRequestAdditionalInfoFromJSON = DanaAccountInquiryRequestAdditionalInfoFromJSON;
exports.DanaAccountInquiryRequestAdditionalInfoFromJSONTyped = DanaAccountInquiryRequestAdditionalInfoFromJSONTyped;
exports.DanaAccountInquiryRequestAdditionalInfoToJSON = DanaAccountInquiryRequestAdditionalInfoToJSON;
exports.DanaAccountInquiryRequestAdditionalInfoToJSONTyped = DanaAccountInquiryRequestAdditionalInfoToJSONTyped;
exports.validateDanaAccountInquiryRequestAdditionalInfo = validateDanaAccountInquiryRequestAdditionalInfo;
const runtime_1 = require("../../../runtime");
/**
 * @export
 */
exports.DanaAccountInquiryRequestAdditionalInfoChargeTargetEnum = {
    Division: 'DIVISION',
    Merchant: 'MERCHANT'
};
/**
 * Check if a given object implements the DanaAccountInquiryRequestAdditionalInfo interface.
 */
function instanceOfDanaAccountInquiryRequestAdditionalInfo(value) {
    if (!('fundType' in value) || value['fundType'] === undefined)
        return false;
    return true;
}
function DanaAccountInquiryRequestAdditionalInfoFromJSON(json) {
    return DanaAccountInquiryRequestAdditionalInfoFromJSONTyped(json, false);
}
function DanaAccountInquiryRequestAdditionalInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fundType': json['fundType'],
        'externalDivisionId': json['externalDivisionId'] == null ? undefined : json['externalDivisionId'],
        'chargeTarget': json['chargeTarget'] == null ? undefined : json['chargeTarget'],
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
    };
}
function DanaAccountInquiryRequestAdditionalInfoToJSON(json) {
    return DanaAccountInquiryRequestAdditionalInfoToJSONTyped(json, false);
}
function DanaAccountInquiryRequestAdditionalInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fundType': value['fundType'],
        'externalDivisionId': value['externalDivisionId'],
        'chargeTarget': value['chargeTarget'],
        'accessToken': value['accessToken'],
        'customerId': value['customerId'],
    };
}
const propertyValidationAttributesMap = {
    fundType: {
        maxLength: 64,
    },
    externalDivisionId: {
        maxLength: 64,
    },
    chargeTarget: {
        maxLength: 64,
    },
    accessToken: {
        maxLength: 512,
    },
    customerId: {
        maxLength: 32,
    },
};
function validateDanaAccountInquiryRequestAdditionalInfo(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('fundType', value.fundType, propertyValidationAttributesMap['fundType']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('externalDivisionId', value.externalDivisionId, propertyValidationAttributesMap['externalDivisionId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('chargeTarget', value.chargeTarget, propertyValidationAttributesMap['chargeTarget']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('accessToken', value.accessToken, propertyValidationAttributesMap['accessToken']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('customerId', value.customerId, propertyValidationAttributesMap['customerId']));
    return validationErrorContexts;
}
