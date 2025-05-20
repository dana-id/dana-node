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
exports.Dana = exports.IPGApi = exports.PaymentGatewayApi = void 0;
/* tslint:disable */
/* eslint-disable */
require("dotenv/config");
__exportStar(require("./runtime"), exports);
const v1_1 = require("./payment_gateway/v1");
var v1_2 = require("./payment_gateway/v1");
Object.defineProperty(exports, "PaymentGatewayApi", { enumerable: true, get: function () { return v1_2.PaymentGatewayApi; } });
const v1_3 = require("./ipg/v1");
var v1_4 = require("./ipg/v1");
Object.defineProperty(exports, "IPGApi", { enumerable: true, get: function () { return v1_4.IPGApi; } });
class Dana {
    constructor({ partnerId, privateKey, origin, env } = {}) {
        partnerId = partnerId ? partnerId : process.env.X_PARTNER_ID;
        privateKey = privateKey ? privateKey : process.env.PRIVATE_KEY;
        origin = origin ? origin : process.env.ORIGIN;
        env = env ? env : process.env.ENV;
        if (!partnerId) {
            throw new Error('Missing required environment variable: X_PARTNER_ID. Please set X_PARTNER_ID in your environment or .env file.');
        }
        if (!privateKey) {
            throw new Error('Missing required environment variable: PRIVATE_KEY. Please set PRIVATE_KEY in your environment or .env file.');
        }
        if (!env) {
            throw new Error('Missing required environment variable: ENV. Please set ENV in your environment or .env file.');
        }
        this.opts = {
            partnerId,
            privateKey,
            origin,
            env
        };
        this.paymentGatewayApi = new v1_1.PaymentGatewayApi(this.opts);
        this.ipgApi = new v1_3.IPGApi(this.opts);
    }
}
exports.Dana = Dana;
exports.default = Dana;
