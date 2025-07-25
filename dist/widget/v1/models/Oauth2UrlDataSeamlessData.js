"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOauth2UrlDataSeamlessData = instanceOfOauth2UrlDataSeamlessData;
exports.Oauth2UrlDataSeamlessDataFromJSON = Oauth2UrlDataSeamlessDataFromJSON;
exports.Oauth2UrlDataSeamlessDataFromJSONTyped = Oauth2UrlDataSeamlessDataFromJSONTyped;
exports.Oauth2UrlDataSeamlessDataToJSON = Oauth2UrlDataSeamlessDataToJSON;
exports.Oauth2UrlDataSeamlessDataToJSONTyped = Oauth2UrlDataSeamlessDataToJSONTyped;
exports.validateOauth2UrlDataSeamlessData = validateOauth2UrlDataSeamlessData;
/**
 * Check if a given object implements the Oauth2UrlDataSeamlessData interface.
 */
function instanceOfOauth2UrlDataSeamlessData(value) {
    return true;
}
function Oauth2UrlDataSeamlessDataFromJSON(json) {
    return Oauth2UrlDataSeamlessDataFromJSONTyped(json, false);
}
function Oauth2UrlDataSeamlessDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bizScenario': json['bizScenario'] == null ? undefined : json['bizScenario'],
        'mobileNumber': json['mobileNumber'] == null ? undefined : json['mobileNumber'],
        'verifiedTime': json['verifiedTime'] == null ? undefined : json['verifiedTime'],
        'externalUid': json['externalUid'] == null ? undefined : json['externalUid'],
        'deviceId': json['deviceId'] == null ? undefined : json['deviceId'],
        'skipRegisterConsult': json['skipRegisterConsult'] == null ? undefined : json['skipRegisterConsult'],
    };
}
function Oauth2UrlDataSeamlessDataToJSON(json) {
    return Oauth2UrlDataSeamlessDataToJSONTyped(json, false);
}
function Oauth2UrlDataSeamlessDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bizScenario': value['bizScenario'],
        'mobileNumber': value['mobileNumber'],
        'verifiedTime': value['verifiedTime'],
        'externalUid': value['externalUid'],
        'deviceId': value['deviceId'],
        'skipRegisterConsult': value['skipRegisterConsult'],
    };
}
const propertyValidationAttributesMap = {};
function validateOauth2UrlDataSeamlessData(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    return validationErrorContexts;
}
