"use strict";
/**
 * CustomValidation
 *
 * This module provides custom validation functions for Payment Gateway API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customValidation = customValidation;
const runtime_1 = require("../../runtime");
const DateValidation_1 = require("../../utils/DateValidation");
const index_1 = require("./models/index");
const index_2 = require("./models/index");
/** In sandbox, only these payMethods are available (Payment Gateway). */
const SANDBOX_ALLOWED_PAY_METHODS = new Set([
    index_2.PayOptionDetailPayMethodEnum.Balance,
    index_2.PayOptionDetailPayMethodEnum.CreditCard,
    index_2.PayOptionDetailPayMethodEnum.DebitCard,
    index_2.PayOptionDetailPayMethodEnum.VirtualAccount,
    index_2.PayOptionDetailPayMethodEnum.NetworkPay,
]);
/** In sandbox, only these payOptions are available (exact or suffix e.g. VIRTUAL_ACCOUNT_BRI). */
const payOptionSuffix = (v) => { var _a; return (_a = v.split('_').pop()) !== null && _a !== void 0 ? _a : v; };
const SANDBOX_ALLOWED_PAY_OPTIONS = new Set([
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.NetworkPayPgCard), // CARD
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.NetworkPayPgQris), // QRIS
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountBri), // BRI
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountPani), // PANI (Panin)
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountCimb), // CIMB
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountMandiri), // MANDIRI
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountBtpn), // BTPN
    payOptionSuffix(index_2.PayOptionDetailPayOptionEnum.VirtualAccountBsiPayment), // BSI
]);
function isSandbox() {
    const env = (process.env.DANA_ENV || process.env.ENV || 'sandbox').toLowerCase();
    return env === 'sandbox';
}
function payOptionAllowedInSandbox(value) {
    const s = (value || '').trim();
    if (!s)
        return false;
    if (SANDBOX_ALLOWED_PAY_OPTIONS.has(s))
        return true;
    for (const opt of SANDBOX_ALLOWED_PAY_OPTIONS) {
        if (s.endsWith('_' + opt))
            return true;
    }
    return false;
}
function runeLen(s) {
    // Properly count Unicode code points (not just UTF-16 code units)
    return Array.from(s).length;
}
const NETWORK_PAY_PG_QRIS = index_2.PayOptionDetailPayOptionEnum.NetworkPayPgQris;
const NETWORK_PAY_PG_CARD = index_2.PayOptionDetailPayOptionEnum.NetworkPayPgCard;
const CREDIT_DEBIT_CARD_PAY_METHODS = new Set([
    index_2.PayOptionDetailPayMethodEnum.CreditCard,
    index_2.PayOptionDetailPayMethodEnum.DebitCard,
]);
const EWALLET_PAY_OPTIONS = new Set([
    index_2.PayOptionDetailPayOptionEnum.NetworkPayPgSpay,
    index_2.PayOptionDetailPayOptionEnum.NetworkPayPgOvo,
    index_2.PayOptionDetailPayOptionEnum.NetworkPayPgGopay,
    index_2.PayOptionDetailPayOptionEnum.NetworkPayPgLinkaja,
]);
/**
 * Validate externalStoreId is required when payOption is NETWORK_PAY_PG_QRIS
 *
 * @param request The request to validate
 * @throws ValidationError if validation fails
 */
function validateExternalStoreIdForQris(request) {
    if (request === null || request === undefined) {
        return;
    }
    // Check if request has payOptionDetails
    const payOptionDetails = request.payOptionDetails;
    if (!payOptionDetails || !Array.isArray(payOptionDetails)) {
        return;
    }
    // Check if any payOption is NETWORK_PAY_PG_QRIS
    let hasQris = false;
    for (const payOptionDetail of payOptionDetails) {
        if (payOptionDetail && String(payOptionDetail.payOption) === NETWORK_PAY_PG_QRIS) {
            hasQris = true;
            break;
        }
    }
    // If QRIS is found, externalStoreId must be provided
    if (hasQris) {
        const externalStoreId = request.externalStoreId;
        if (!externalStoreId || (typeof externalStoreId === 'string' && externalStoreId.trim() === '')) {
            throw new runtime_1.ValidationError([
                {
                    field: 'externalStoreId',
                    message: 'externalStoreId is required when payOption is NETWORK_PAY_PG_QRIS'
                }
            ]);
        }
    }
}
/** Money value pattern: digits (1-16) + "." + exactly 2 digits (e.g. 10000.00) */
const MONEY_VALUE_PATTERN = /^\d{1,16}\.\d{2}$/;
/**
 * Validate that additionalInfo must exist
 */
function validateAdditionalInfoRequired(request) {
    if (request === null || request === undefined) {
        return;
    }
    const additionalInfo = request.additionalInfo;
    if (additionalInfo === null || additionalInfo === undefined) {
        throw new runtime_1.ValidationError([
            { field: 'additionalInfo', message: 'additionalInfo is required' }
        ]);
    }
}
/**
 * Validate that Money value matches pattern (e.g. 10000.00): ^\d{1,16}\.\d{2}$
 */
function validateMoneyValuePattern(request) {
    if (request === null || request === undefined) {
        return;
    }
    const amount = request.amount;
    if (amount === null || amount === undefined) {
        return;
    }
    const value = amount.value;
    if (value === null || value === undefined || value === '') {
        throw new runtime_1.ValidationError([
            { field: 'amount.value', message: 'amount.value is required' }
        ]);
    }
    if (typeof value !== 'string' || !MONEY_VALUE_PATTERN.test(value)) {
        throw new runtime_1.ValidationError([
            { field: 'amount.value', message: `amount.value must match pattern (e.g. 10000.00): got ${value}` }
        ]);
    }
}
/**
 * In sandbox, only certain payMethod and payOption values are available.
 * payMethod: BALANCE, CREDIT_CARD, DEBIT_CARD, VIRTUAL_ACCOUNT, NETWORK_PAY.
 * payOption: CARD, QRIS, BRI, PANIN, CIMB, MANDIRI, BTPN, BSI (exact or suffix e.g. VIRTUAL_ACCOUNT_BRI).
 */
function validateSandboxPayMethodAndPayOption(request) {
    if (request === null || request === undefined || !isSandbox()) {
        return;
    }
    const payOptionDetails = request.payOptionDetails;
    if (!payOptionDetails || !Array.isArray(payOptionDetails)) {
        return;
    }
    for (let i = 0; i < payOptionDetails.length; i++) {
        const detail = payOptionDetails[i];
        if (!detail)
            continue;
        const payMethod = (detail.payMethod != null ? String(detail.payMethod) : '').trim();
        if (payMethod && !SANDBOX_ALLOWED_PAY_METHODS.has(payMethod)) {
            throw new runtime_1.ValidationError([
                {
                    field: `payOptionDetails[${i}].payMethod`,
                    message: `In sandbox, payMethod must be one of [${[...SANDBOX_ALLOWED_PAY_METHODS].sort().join(', ')}]; got ${payMethod}`
                }
            ]);
        }
        const payOption = (detail.payOption != null ? String(detail.payOption) : '').trim();
        if (payOption && !payOptionAllowedInSandbox(payOption)) {
            throw new runtime_1.ValidationError([
                {
                    field: `payOptionDetails[${i}].payOption`,
                    message: `In sandbox, payOption must be one of [${[...SANDBOX_ALLOWED_PAY_OPTIONS].sort().join(', ')}] (or suffix like VIRTUAL_ACCOUNT_BRI); got ${payOption}`
                }
            ]);
        }
    }
}
function validateConditionalPayOptionAdditionalInfoCreateOrderRequest(request) {
    var _a;
    if (request === null || request === undefined) {
        return;
    }
    const payOptionDetails = request.payOptionDetails;
    if (!payOptionDetails || !Array.isArray(payOptionDetails)) {
        return;
    }
    const validationContexts = [];
    for (let i = 0; i < payOptionDetails.length; i++) {
        const detail = payOptionDetails[i];
        if (!detail)
            continue;
        const payMethod = (detail.payMethod != null ? String(detail.payMethod) : '').trim();
        const payOption = (detail.payOption != null ? String(detail.payOption) : '').trim();
        const additionalInfo = (_a = detail.additionalInfo) !== null && _a !== void 0 ? _a : {};
        const phoneNumberRaw = additionalInfo === null || additionalInfo === void 0 ? void 0 : additionalInfo.phoneNumber;
        const phoneNumber = typeof phoneNumberRaw === 'string' ? phoneNumberRaw.trim() : '';
        const isCardPayment = CREDIT_DEBIT_CARD_PAY_METHODS.has(payMethod) || payOption === NETWORK_PAY_PG_CARD;
        const isEwalletPayment = EWALLET_PAY_OPTIONS.has(payOption);
        // Card & e-wallet require phoneNumber
        if (isCardPayment || isEwalletPayment) {
            if (!phoneNumber) {
                validationContexts.push({
                    field: `payOptionDetails[${i}].additionalInfo.phoneNumber`,
                    message: `phoneNumber is required for card/e-wallet payment (payOptionDetails[${i}])`,
                });
            }
            else {
                const len = runeLen(phoneNumber);
                if (len < 1 || len > 15) {
                    validationContexts.push({
                        field: `payOptionDetails[${i}].additionalInfo.phoneNumber`,
                        message: `phoneNumber must be between 1 and 15 characters (payOptionDetails[${i}])`,
                    });
                }
            }
        }
    }
    if (validationContexts.length > 0) {
        throw new runtime_1.ValidationError(validationContexts);
    }
}
function validateOptionalFieldsWithRequiredNestedCreateOrderRequest(request) {
    var _a;
    if (request === null || request === undefined) {
        return;
    }
    const order = (_a = request === null || request === void 0 ? void 0 : request.additionalInfo) === null || _a === void 0 ? void 0 : _a.order;
    if (!order) {
        return;
    }
    const validationContexts = [];
    // Buyer: externalUserType/externalUserId are mutually dependent (when one is provided, the other is required)
    const buyer = order === null || order === void 0 ? void 0 : order.buyer;
    if (buyer) {
        const externalUserTypeRaw = buyer === null || buyer === void 0 ? void 0 : buyer.externalUserType;
        const externalUserType = typeof externalUserTypeRaw === 'string' ? externalUserTypeRaw.trim() : '';
        const externalUserIdRaw = buyer === null || buyer === void 0 ? void 0 : buyer.externalUserId;
        const externalUserId = typeof externalUserIdRaw === 'string' ? externalUserIdRaw.trim() : '';
        const hasType = !!externalUserType;
        const hasId = !!externalUserId;
        if (hasId && !hasType) {
            validationContexts.push({
                field: 'additionalInfo.order.buyer.externalUserType',
                message: 'externalUserType is required when externalUserId is filled',
            });
        }
        if (hasType && !hasId) {
            validationContexts.push({
                field: 'additionalInfo.order.buyer.externalUserId',
                message: 'externalUserId is required when externalUserType is filled',
            });
        }
    }
    // Goods: when goods is filled, each item requires name
    const goods = Array.isArray(order === null || order === void 0 ? void 0 : order.goods) ? order.goods : [];
    if (goods.length > 0) {
        for (let i = 0; i < goods.length; i++) {
            const g = goods[i];
            if (!g)
                continue;
            const nameRaw = g === null || g === void 0 ? void 0 : g.name;
            const name = typeof nameRaw === 'string' ? nameRaw.trim() : '';
            if (!name) {
                validationContexts.push({
                    field: `additionalInfo.order.goods[${i}].name`,
                    message: 'name is required when goods is filled',
                });
            }
        }
    }
    // ShippingInfo: when shippingInfo is filled, each item requires firstName
    const shippingInfo = Array.isArray(order === null || order === void 0 ? void 0 : order.shippingInfo) ? order.shippingInfo : [];
    if (shippingInfo.length > 0) {
        for (let i = 0; i < shippingInfo.length; i++) {
            const s = shippingInfo[i];
            if (!s)
                continue;
            const firstNameRaw = s === null || s === void 0 ? void 0 : s.firstName;
            const firstName = typeof firstNameRaw === 'string' ? firstNameRaw.trim() : '';
            if (!firstName) {
                validationContexts.push({
                    field: `additionalInfo.order.shippingInfo[${i}].firstName`,
                    message: 'firstName is required when shippingInfo is filled',
                });
            }
        }
    }
    if (validationContexts.length > 0) {
        throw new runtime_1.ValidationError(validationContexts);
    }
}
/**
 * Validate validUpTo field in CreateOrderByApiRequest or CreateOrderByRedirectRequest.
 *
 * This function handles both request types directly (not wrapped in CreateOrderRequest):
 * - CreateOrderByApiRequest: validates validUpTo directly
 * - CreateOrderByRedirectRequest: validates validUpTo directly
 *
 * @param request The request to validate
 * @throws ValidationError if validation fails
 */
function validateValidUpToCreateOrderRequest(request) {
    if (request === null || request === undefined) {
        return;
    }
    if (request.validUpTo !== null && request.validUpTo !== undefined) {
        try {
            (0, DateValidation_1.validateValidUpToDate)(request.validUpTo);
        }
        catch (error) {
            throw new runtime_1.ValidationError([
                {
                    field: 'validUpTo',
                    message: 'validUpTo validation failed: ' + ((error === null || error === void 0 ? void 0 : error.message) || String(error))
                }
            ]);
        }
    }
}
const validationRegistry = {
    'CreateOrderByApiRequest': [
        validateAdditionalInfoRequired,
        validateMoneyValuePattern,
        validateValidUpToCreateOrderRequest,
        validateExternalStoreIdForQris,
        validateSandboxPayMethodAndPayOption,
        validateConditionalPayOptionAdditionalInfoCreateOrderRequest,
        validateOptionalFieldsWithRequiredNestedCreateOrderRequest,
    ],
    'CreateOrderByRedirectRequest': [
        validateAdditionalInfoRequired,
        validateMoneyValuePattern,
        validateValidUpToCreateOrderRequest,
        validateSandboxPayMethodAndPayOption,
        validateConditionalPayOptionAdditionalInfoCreateOrderRequest,
        validateOptionalFieldsWithRequiredNestedCreateOrderRequest,
    ],
};
/**
 * Perform custom validations on the request based on its type
 *
 * This function checks the request structure to determine the request type and runs
 * the appropriate validations from the registry.
 *
 * @param request The request object to validate (can be any type)
 * @throws ValidationError if validation fails
 */
function customValidation(request) {
    if (request === null || request === undefined) {
        return;
    }
    // Determine request kind using type guards (registry pattern)
    let kind = null;
    if ((0, index_1.instanceOfCreateOrderByApiRequest)(request)) {
        kind = 'CreateOrderByApiRequest';
    }
    else if ((0, index_1.instanceOfCreateOrderByRedirectRequest)(request)) {
        kind = 'CreateOrderByRedirectRequest';
    }
    if (!kind) {
        return;
    }
    const validators = validationRegistry[kind];
    if (!validators || validators.length === 0) {
        return;
    }
    // Error aggregation: run all validators and collect ValidationError contexts
    const aggregatedContexts = [];
    for (const validator of validators) {
        try {
            validator(request);
        }
        catch (error) {
            if (error instanceof runtime_1.ValidationError && Array.isArray(error.validationErrorContexts)) {
                aggregatedContexts.push(...error.validationErrorContexts);
                continue;
            }
            throw error;
        }
    }
    if (aggregatedContexts.length > 0) {
        throw new runtime_1.ValidationError(aggregatedContexts);
    }
}
