"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOrderBase = instanceOfOrderBase;
exports.OrderBaseFromJSON = OrderBaseFromJSON;
exports.OrderBaseFromJSONTyped = OrderBaseFromJSONTyped;
exports.OrderBaseToJSON = OrderBaseToJSON;
exports.OrderBaseToJSONTyped = OrderBaseToJSONTyped;
exports.validateOrderBase = validateOrderBase;
const runtime_1 = require("../../../runtime");
const Buyer_1 = require("./Buyer");
const Goods_1 = require("./Goods");
const ShippingInfo_1 = require("./ShippingInfo");
/**
 * Check if a given object implements the OrderBase interface.
 */
function instanceOfOrderBase(value) {
    if (!('orderTitle' in value) || value['orderTitle'] === undefined)
        return false;
    return true;
}
function OrderBaseFromJSON(json) {
    return OrderBaseFromJSONTyped(json, false);
}
function OrderBaseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'orderTitle': json['orderTitle'],
        'merchantTransType': json['merchantTransType'] == null ? undefined : json['merchantTransType'],
        'buyer': json['buyer'] == null ? undefined : (0, Buyer_1.BuyerFromJSON)(json['buyer']),
        'goods': json['goods'] == null ? undefined : (json['goods'].map(Goods_1.GoodsFromJSON)),
        'shippingInfo': json['shippingInfo'] == null ? undefined : (json['shippingInfo'].map(ShippingInfo_1.ShippingInfoFromJSON)),
        'extendInfo': json['extendInfo'] == null ? undefined : json['extendInfo'],
        'createdTime': json['createdTime'] == null ? undefined : json['createdTime'],
        'orderMemo': json['orderMemo'] == null ? undefined : json['orderMemo'],
    };
}
function OrderBaseToJSON(json) {
    return OrderBaseToJSONTyped(json, false);
}
function OrderBaseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'orderTitle': value['orderTitle'],
        'merchantTransType': value['merchantTransType'],
        'buyer': (0, Buyer_1.BuyerToJSON)(value['buyer']),
        'goods': value['goods'] == null ? undefined : (value['goods'].map(Goods_1.GoodsToJSON)),
        'shippingInfo': value['shippingInfo'] == null ? undefined : (value['shippingInfo'].map(ShippingInfo_1.ShippingInfoToJSON)),
        'extendInfo': value['extendInfo'],
        'createdTime': value['createdTime'],
        'orderMemo': value['orderMemo'],
    };
}
const propertyValidationAttributesMap = {
    orderTitle: {
        maxLength: 64,
    },
    merchantTransType: {
        maxLength: 64,
    },
    extendInfo: {
        maxLength: 4096,
    },
};
function validateOrderBase(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('orderTitle', value.orderTitle, propertyValidationAttributesMap['orderTitle']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('merchantTransType', value.merchantTransType, propertyValidationAttributesMap['merchantTransType']));
    validationErrorContexts.push(...(0, Buyer_1.validateBuyer)(value.buyer));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('extendInfo', value.extendInfo, propertyValidationAttributesMap['extendInfo']));
    return validationErrorContexts;
}
