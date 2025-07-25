"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUserProfileResponseResponseHeadFunctionEnum = void 0;
exports.instanceOfQueryUserProfileResponseResponseHead = instanceOfQueryUserProfileResponseResponseHead;
exports.QueryUserProfileResponseResponseHeadFromJSON = QueryUserProfileResponseResponseHeadFromJSON;
exports.QueryUserProfileResponseResponseHeadFromJSONTyped = QueryUserProfileResponseResponseHeadFromJSONTyped;
exports.QueryUserProfileResponseResponseHeadToJSON = QueryUserProfileResponseResponseHeadToJSON;
exports.QueryUserProfileResponseResponseHeadToJSONTyped = QueryUserProfileResponseResponseHeadToJSONTyped;
exports.validateQueryUserProfileResponseResponseHead = validateQueryUserProfileResponseResponseHead;
const runtime_1 = require("../../../runtime");
/**
 * @export
 */
exports.QueryUserProfileResponseResponseHeadFunctionEnum = {
    DanaMemberQueryQueryUserProfile: 'dana.member.query.queryUserProfile'
};
/**
 * Check if a given object implements the QueryUserProfileResponseResponseHead interface.
 */
function instanceOfQueryUserProfileResponseResponseHead(value) {
    return true;
}
function QueryUserProfileResponseResponseHeadFromJSON(json) {
    return QueryUserProfileResponseResponseHeadFromJSONTyped(json, false);
}
function QueryUserProfileResponseResponseHeadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'version': json['version'] == null ? undefined : json['version'],
        '_function': json['function'] == null ? undefined : json['function'],
        'clientId': json['clientId'] == null ? undefined : json['clientId'],
        'respTime': json['respTime'] == null ? undefined : json['respTime'],
        'reqMsgId': json['reqMsgId'] == null ? undefined : json['reqMsgId'],
        'reserve': json['reserve'] == null ? undefined : json['reserve'],
    };
}
function QueryUserProfileResponseResponseHeadToJSON(json) {
    return QueryUserProfileResponseResponseHeadToJSONTyped(json, false);
}
function QueryUserProfileResponseResponseHeadToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'version': value['version'],
        'function': value['_function'],
        'clientId': value['clientId'],
        'respTime': value['respTime'],
        'reqMsgId': value['reqMsgId'],
        'reserve': value['reserve'],
    };
}
const propertyValidationAttributesMap = {
    version: {
        maxLength: 8,
    },
    _function: {
        maxLength: 128,
    },
    clientId: {
        maxLength: 32,
    },
    reqMsgId: {
        maxLength: 64,
    },
    reserve: {
        maxLength: 256,
    },
};
function validateQueryUserProfileResponseResponseHead(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('version', value.version, propertyValidationAttributesMap['version']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('_function', value._function, propertyValidationAttributesMap['_function']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('clientId', value.clientId, propertyValidationAttributesMap['clientId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('reqMsgId', value.reqMsgId, propertyValidationAttributesMap['reqMsgId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('reserve', value.reserve, propertyValidationAttributesMap['reserve']));
    return validationErrorContexts;
}
