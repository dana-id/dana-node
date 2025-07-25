"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfQueryDivisionResponseResponseBody = instanceOfQueryDivisionResponseResponseBody;
exports.QueryDivisionResponseResponseBodyFromJSON = QueryDivisionResponseResponseBodyFromJSON;
exports.QueryDivisionResponseResponseBodyFromJSONTyped = QueryDivisionResponseResponseBodyFromJSONTyped;
exports.QueryDivisionResponseResponseBodyToJSON = QueryDivisionResponseResponseBodyToJSON;
exports.QueryDivisionResponseResponseBodyToJSONTyped = QueryDivisionResponseResponseBodyToJSONTyped;
exports.validateQueryDivisionResponseResponseBody = validateQueryDivisionResponseResponseBody;
const DivisionResourceInfo_1 = require("./DivisionResourceInfo");
const ResultInfo_1 = require("./ResultInfo");
/**
 * Check if a given object implements the QueryDivisionResponseResponseBody interface.
 */
function instanceOfQueryDivisionResponseResponseBody(value) {
    if (!('resultInfo' in value) || value['resultInfo'] === undefined)
        return false;
    return true;
}
function QueryDivisionResponseResponseBodyFromJSON(json) {
    return QueryDivisionResponseResponseBodyFromJSONTyped(json, false);
}
function QueryDivisionResponseResponseBodyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'resultInfo': (0, ResultInfo_1.ResultInfoFromJSON)(json['resultInfo']),
        'divisionResourceInfo': json['divisionResourceInfo'] == null ? undefined : (0, DivisionResourceInfo_1.DivisionResourceInfoFromJSON)(json['divisionResourceInfo']),
    };
}
function QueryDivisionResponseResponseBodyToJSON(json) {
    return QueryDivisionResponseResponseBodyToJSONTyped(json, false);
}
function QueryDivisionResponseResponseBodyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'resultInfo': (0, ResultInfo_1.ResultInfoToJSON)(value['resultInfo']),
        'divisionResourceInfo': (0, DivisionResourceInfo_1.DivisionResourceInfoToJSON)(value['divisionResourceInfo']),
    };
}
const propertyValidationAttributesMap = {};
function validateQueryDivisionResponseResponseBody(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...(0, ResultInfo_1.validateResultInfo)(value.resultInfo));
    validationErrorContexts.push(...(0, DivisionResourceInfo_1.validateDivisionResourceInfo)(value.divisionResourceInfo));
    return validationErrorContexts;
}
