"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTransferToBankRequest = instanceOfTransferToBankRequest;
exports.TransferToBankRequestFromJSON = TransferToBankRequestFromJSON;
exports.TransferToBankRequestFromJSONTyped = TransferToBankRequestFromJSONTyped;
exports.TransferToBankRequestToJSON = TransferToBankRequestToJSON;
exports.TransferToBankRequestToJSONTyped = TransferToBankRequestToJSONTyped;
exports.validateTransferToBankRequest = validateTransferToBankRequest;
const runtime_1 = require("../../../runtime");
const Money_1 = require("./Money");
const TransferToBankRequestAdditionalInfo_1 = require("./TransferToBankRequestAdditionalInfo");
/**
 * Check if a given object implements the TransferToBankRequest interface.
 */
function instanceOfTransferToBankRequest(value) {
    if (!('customerNumber' in value) || value['customerNumber'] === undefined)
        return false;
    if (!('beneficiaryAccountNumber' in value) || value['beneficiaryAccountNumber'] === undefined)
        return false;
    if (!('beneficiaryBankCode' in value) || value['beneficiaryBankCode'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('additionalInfo' in value) || value['additionalInfo'] === undefined)
        return false;
    return true;
}
function TransferToBankRequestFromJSON(json) {
    return TransferToBankRequestFromJSONTyped(json, false);
}
function TransferToBankRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'partnerReferenceNo': json['partnerReferenceNo'] == null ? undefined : json['partnerReferenceNo'],
        'customerNumber': json['customerNumber'],
        'accountType': json['accountType'] == null ? undefined : json['accountType'],
        'beneficiaryAccountNumber': json['beneficiaryAccountNumber'],
        'beneficiaryBankCode': json['beneficiaryBankCode'],
        'amount': (0, Money_1.MoneyFromJSON)(json['amount']),
        'additionalInfo': (0, TransferToBankRequestAdditionalInfo_1.TransferToBankRequestAdditionalInfoFromJSON)(json['additionalInfo']),
    };
}
function TransferToBankRequestToJSON(json) {
    return TransferToBankRequestToJSONTyped(json, false);
}
function TransferToBankRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'partnerReferenceNo': value['partnerReferenceNo'],
        'customerNumber': value['customerNumber'],
        'accountType': value['accountType'],
        'beneficiaryAccountNumber': value['beneficiaryAccountNumber'],
        'beneficiaryBankCode': value['beneficiaryBankCode'],
        'amount': (0, Money_1.MoneyToJSON)(value['amount']),
        'additionalInfo': (0, TransferToBankRequestAdditionalInfo_1.TransferToBankRequestAdditionalInfoToJSON)(value['additionalInfo']),
    };
}
const propertyValidationAttributesMap = {
    partnerReferenceNo: {
        maxLength: 64,
    },
    customerNumber: {
        maxLength: 32,
    },
    accountType: {
        maxLength: 25,
    },
    beneficiaryAccountNumber: {
        maxLength: 32,
    },
    beneficiaryBankCode: {
        maxLength: 8,
    },
};
function validateTransferToBankRequest(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('partnerReferenceNo', value.partnerReferenceNo, propertyValidationAttributesMap['partnerReferenceNo']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('customerNumber', value.customerNumber, propertyValidationAttributesMap['customerNumber']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('accountType', value.accountType, propertyValidationAttributesMap['accountType']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('beneficiaryAccountNumber', value.beneficiaryAccountNumber, propertyValidationAttributesMap['beneficiaryAccountNumber']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('beneficiaryBankCode', value.beneficiaryBankCode, propertyValidationAttributesMap['beneficiaryBankCode']));
    validationErrorContexts.push(...(0, Money_1.validateMoney)(value.amount));
    validationErrorContexts.push(...(0, TransferToBankRequestAdditionalInfo_1.validateTransferToBankRequestAdditionalInfo)(value.additionalInfo));
    return validationErrorContexts;
}
