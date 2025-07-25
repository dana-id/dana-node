"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateDivisionResponseResponseBody = instanceOfCreateDivisionResponseResponseBody;
exports.CreateDivisionResponseResponseBodyFromJSON = CreateDivisionResponseResponseBodyFromJSON;
exports.CreateDivisionResponseResponseBodyFromJSONTyped = CreateDivisionResponseResponseBodyFromJSONTyped;
exports.CreateDivisionResponseResponseBodyToJSON = CreateDivisionResponseResponseBodyToJSON;
exports.CreateDivisionResponseResponseBodyToJSONTyped = CreateDivisionResponseResponseBodyToJSONTyped;
exports.validateCreateDivisionResponseResponseBody = validateCreateDivisionResponseResponseBody;
const runtime_1 = require("../../../runtime");
const ResultInfo_1 = require("./ResultInfo");
/**
 * Check if a given object implements the CreateDivisionResponseResponseBody interface.
 */
function instanceOfCreateDivisionResponseResponseBody(value) {
    if (!('resultInfo' in value) || value['resultInfo'] === undefined)
        return false;
    return true;
}
function CreateDivisionResponseResponseBodyFromJSON(json) {
    return CreateDivisionResponseResponseBodyFromJSONTyped(json, false);
}
function CreateDivisionResponseResponseBodyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'resultInfo': (0, ResultInfo_1.ResultInfoFromJSON)(json['resultInfo']),
        'divisionId': json['divisionId'] == null ? undefined : json['divisionId'],
    };
}
function CreateDivisionResponseResponseBodyToJSON(json) {
    return CreateDivisionResponseResponseBodyToJSONTyped(json, false);
}
function CreateDivisionResponseResponseBodyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'resultInfo': (0, ResultInfo_1.ResultInfoToJSON)(value['resultInfo']),
        'divisionId': value['divisionId'],
    };
}
const propertyValidationAttributesMap = {
    divisionId: {
        maxLength: 21,
    },
};
function validateCreateDivisionResponseResponseBody(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...(0, ResultInfo_1.validateResultInfo)(value.resultInfo));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('divisionId', value.divisionId, propertyValidationAttributesMap['divisionId']));
    return validationErrorContexts;
}
