"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUpdateDivisionResponse = instanceOfUpdateDivisionResponse;
exports.UpdateDivisionResponseFromJSON = UpdateDivisionResponseFromJSON;
exports.UpdateDivisionResponseFromJSONTyped = UpdateDivisionResponseFromJSONTyped;
exports.UpdateDivisionResponseToJSON = UpdateDivisionResponseToJSON;
exports.UpdateDivisionResponseToJSONTyped = UpdateDivisionResponseToJSONTyped;
exports.validateUpdateDivisionResponse = validateUpdateDivisionResponse;
const UpdateDivisionResponseResponse_1 = require("./UpdateDivisionResponseResponse");
/**
 * Check if a given object implements the UpdateDivisionResponse interface.
 */
function instanceOfUpdateDivisionResponse(value) {
    if (!('response' in value) || value['response'] === undefined)
        return false;
    return true;
}
function UpdateDivisionResponseFromJSON(json) {
    return UpdateDivisionResponseFromJSONTyped(json, false);
}
function UpdateDivisionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'response': (0, UpdateDivisionResponseResponse_1.UpdateDivisionResponseResponseFromJSON)(json['response']),
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}
function UpdateDivisionResponseToJSON(json) {
    return UpdateDivisionResponseToJSONTyped(json, false);
}
function UpdateDivisionResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'response': (0, UpdateDivisionResponseResponse_1.UpdateDivisionResponseResponseToJSON)(value['response']),
        'signature': value['signature'],
    };
}
const propertyValidationAttributesMap = {};
function validateUpdateDivisionResponse(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...(0, UpdateDivisionResponseResponse_1.validateUpdateDivisionResponseResponse)(value.response));
    return validationErrorContexts;
}
