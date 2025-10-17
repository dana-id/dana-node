"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dana = void 0;
/* tslint:disable */
/* eslint-disable */
require("dotenv/config");
__exportStar(require("./runtime"), exports);
const v1_1 = require("./payment_gateway/v1");
const v1_2 = require("./widget/v1");
const v1_3 = require("./disbursement/v1");
const v1_4 = require("./merchant_management/v1");
class Dana {
    constructor({ partnerId, privateKey, origin, env, clientSecret, debugMode } = {}) {
        partnerId = partnerId ? partnerId : process.env.X_PARTNER_ID;
        privateKey = privateKey ? privateKey : process.env.PRIVATE_KEY;
        origin = origin ? origin : process.env.ORIGIN;
        env = env ? env : process.env.DANA_ENV || process.env.ENV || 'sandbox';
        clientSecret = clientSecret ? clientSecret : process.env.CLIENT_SECRET;
        debugMode = debugMode ? debugMode : process.env.X_DEBUG;
        if (!partnerId) {
            throw new Error('Missing required environment variable: X_PARTNER_ID. Please set X_PARTNER_ID in your environment or .env file.');
        }
        if (!privateKey) {
            throw new Error('Missing required environment variable: PRIVATE_KEY. Please set PRIVATE_KEY in your environment or .env file.');
        }
        if (!env) {
            throw new Error('Missing required environment variable: DANA_ENV or ENV. Please set DANA_ENV or ENV in your environment or .env file.');
        }
        this.opts = {
            partnerId,
            privateKey,
            origin,
            env,
            clientSecret,
            debugMode
        };
        this.paymentGatewayApi = new v1_1.PaymentGatewayApi(this.opts);
        this.widgetApi = new v1_2.WidgetApi(this.opts);
        this.disbursementApi = new v1_3.DisbursementApi(this.opts);
        this.merchantManagementApi = new v1_4.MerchantManagementApi(this.opts);
    }
}
exports.Dana = Dana;
exports.default = Dana;
