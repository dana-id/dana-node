"use strict";
/**
 * CustomValidation
 *
 * This module provides custom validation functions for Payment Gateway API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customValidation = customValidation;
exports.customValidationResponse = customValidationResponse;
exports.enrichCreateOrderError = enrichCreateOrderError;
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
const SANDBOX_ALLOWED_PAY_OPTIONS = new Set([
    'CARD',
    'QRIS',
    'BRI',
    'PANI',
    'CIMB',
    'BTPN',
    'BSI_PAYMENT',
]);
function isSandbox() {
    const env = (process.env.DANA_ENV || process.env.ENV || 'sandbox').toLowerCase();
    return env === 'sandbox';
}
/** Sandbox maximum amount (major units) for Payment Gateway create order. */
const SANDBOX_MAX_AMOUNT = 10000000;
function validateSandboxAmount(request) {
    if (request === null || request === undefined || !isSandbox()) {
        return;
    }
    const amount = request.amount;
    if (amount === null || amount === undefined) {
        return;
    }
    const value = amount.value;
    if (typeof value !== 'string' || value.trim() === '') {
        return;
    }
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
        return;
    }
    if (parsed > SANDBOX_MAX_AMOUNT) {
        throw new runtime_1.ValidationError([
            {
                field: 'amount.value',
                message: `in sandbox, amount.value must not exceed ${SANDBOX_MAX_AMOUNT}; got ${value}`,
            },
        ]);
    }
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
    index_2.PayOptionDetailPayMethodEnum.Card,
    index_2.PayOptionDetailPayMethodEnum.CreditCard,
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
function validatePartnerReferenceNoForQris(request) {
    if (request === null || request === undefined) {
        return;
    }
    const payOptionDetails = request.payOptionDetails;
    if (!payOptionDetails || !Array.isArray(payOptionDetails)) {
        return;
    }
    let hasQris = false;
    for (const payOptionDetail of payOptionDetails) {
        if (payOptionDetail && String(payOptionDetail.payOption) === NETWORK_PAY_PG_QRIS) {
            hasQris = true;
            break;
        }
    }
    if (hasQris) {
        const partnerReferenceNo = String(request.partnerReferenceNo || '').trim();
        if (partnerReferenceNo.length > 25) {
            throw new runtime_1.ValidationError([
                {
                    field: 'partnerReferenceNo',
                    message: 'partnerReferenceNo must be at most 25 characters when payOption is NETWORK_PAY_PG_QRIS'
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
 * Default envInfo.sourcePlatform to IPG when missing/empty.
 */
function defaultSourcePlatform(request) {
    var _a;
    if (request === null || request === undefined) {
        return;
    }
    const additionalInfo = request.additionalInfo;
    if (!additionalInfo || !additionalInfo.envInfo) {
        return;
    }
    const sourcePlatform = additionalInfo.envInfo.sourcePlatform;
    if (typeof sourcePlatform !== 'string' || sourcePlatform.trim() === '') {
        additionalInfo.envInfo.sourcePlatform = (_a = index_1.EnvInfoSourcePlatformEnum.Ipg) !== null && _a !== void 0 ? _a : 'IPG';
    }
}
/**
 * Reject empty strings for required additionalInfo fields (mcc, envInfo.terminalType).
 */
function validateRequiredAdditionalInfoFieldsNotEmpty(request) {
    var _a;
    if (request === null || request === undefined) {
        return;
    }
    const additionalInfo = request.additionalInfo;
    if (!additionalInfo) {
        return;
    }
    const contexts = [];
    const mcc = additionalInfo.mcc;
    if (typeof mcc !== 'string' || mcc.trim() === '') {
        contexts.push({
            field: 'additionalInfo.mcc',
            message: 'additionalInfo.mcc is required and cannot be empty',
        });
    }
    const terminalType = (_a = additionalInfo.envInfo) === null || _a === void 0 ? void 0 : _a.terminalType;
    if (typeof terminalType !== 'string' || terminalType.trim() === '') {
        contexts.push({
            field: 'additionalInfo.envInfo.terminalType',
            message: 'additionalInfo.envInfo.terminalType is required and cannot be empty',
        });
    }
    if (contexts.length > 0) {
        throw new runtime_1.ValidationError(contexts);
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
 * payOption: CARD, QRIS, BRI, PANIN, CIMB, BTPN, BSI (exact or suffix e.g. VIRTUAL_ACCOUNT_BRI).
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
    var _a, _b, _c;
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
    // Goods: when goods is filled, each item requires all Goods required fields
    const goods = Array.isArray(order === null || order === void 0 ? void 0 : order.goods) ? order.goods : [];
    if (goods.length > 0) {
        for (let i = 0; i < goods.length; i++) {
            const g = goods[i];
            if (!g)
                continue;
            const prefix = `additionalInfo.order.goods[${i}]`;
            const trim = (v) => (typeof v === 'string' ? v.trim() : '');
            if (!trim(g === null || g === void 0 ? void 0 : g.name)) {
                validationContexts.push({
                    field: `${prefix}.name`,
                    message: 'name is required when goods is filled',
                });
            }
            if (!trim(g === null || g === void 0 ? void 0 : g.merchantGoodsId)) {
                validationContexts.push({
                    field: `${prefix}.merchantGoodsId`,
                    message: 'merchantGoodsId is required when goods is filled',
                });
            }
            if (!trim(g === null || g === void 0 ? void 0 : g.description)) {
                validationContexts.push({
                    field: `${prefix}.description`,
                    message: 'description is required when goods is filled',
                });
            }
            if (!trim(g === null || g === void 0 ? void 0 : g.category)) {
                validationContexts.push({
                    field: `${prefix}.category`,
                    message: 'category is required when goods is filled',
                });
            }
            if (!trim(g === null || g === void 0 ? void 0 : g.quantity)) {
                validationContexts.push({
                    field: `${prefix}.quantity`,
                    message: 'quantity is required when goods is filled',
                });
            }
            if (!trim((_b = g === null || g === void 0 ? void 0 : g.price) === null || _b === void 0 ? void 0 : _b.value)) {
                validationContexts.push({
                    field: `${prefix}.price.value`,
                    message: 'price.value is required when goods is filled',
                });
            }
            if (!trim((_c = g === null || g === void 0 ? void 0 : g.price) === null || _c === void 0 ? void 0 : _c.currency)) {
                validationContexts.push({
                    field: `${prefix}.price.currency`,
                    message: 'price.currency is required when goods is filled',
                });
            }
        }
    }
    // ShippingInfo: when shippingInfo is filled, each item requires full required fields
    const shippingInfo = Array.isArray(order === null || order === void 0 ? void 0 : order.shippingInfo) ? order.shippingInfo : [];
    if (shippingInfo.length > 0) {
        for (let i = 0; i < shippingInfo.length; i++) {
            const s = shippingInfo[i];
            if (!s)
                continue;
            const prefix = `additionalInfo.order.shippingInfo[${i}]`;
            const requiredFields = [
                ['merchantShippingId', s === null || s === void 0 ? void 0 : s.merchantShippingId],
                ['countryName', s === null || s === void 0 ? void 0 : s.countryName],
                ['stateName', s === null || s === void 0 ? void 0 : s.stateName],
                ['cityName', s === null || s === void 0 ? void 0 : s.cityName],
                ['address1', s === null || s === void 0 ? void 0 : s.address1],
                ['firstName', s === null || s === void 0 ? void 0 : s.firstName],
                ['lastName', s === null || s === void 0 ? void 0 : s.lastName],
                ['zipCode', s === null || s === void 0 ? void 0 : s.zipCode],
            ];
            for (const [field, raw] of requiredFields) {
                const value = typeof raw === 'string' ? raw.trim() : '';
                if (!value) {
                    validationContexts.push({
                        field: `${prefix}.${field}`,
                        message: `${field} is required when shippingInfo is filled`,
                    });
                }
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
        defaultSourcePlatform,
        validateAdditionalInfoRequired,
        validateRequiredAdditionalInfoFieldsNotEmpty,
        validateMoneyValuePattern,
        validateSandboxAmount,
        validateValidUpToCreateOrderRequest,
        validateExternalStoreIdForQris,
        validatePartnerReferenceNoForQris,
        validateSandboxPayMethodAndPayOption,
        validateConditionalPayOptionAdditionalInfoCreateOrderRequest,
        validateOptionalFieldsWithRequiredNestedCreateOrderRequest,
    ],
    'CreateOrderByRedirectRequest': [
        defaultSourcePlatform,
        validateAdditionalInfoRequired,
        validateRequiredAdditionalInfoFieldsNotEmpty,
        validateMoneyValuePattern,
        validateSandboxAmount,
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
    else if (request.payOptionDetails !== undefined) {
        // Heuristic fallback when plain objects don't satisfy generated instanceOf guards
        kind = 'CreateOrderByApiRequest';
    }
    else if (request.partnerReferenceNo !== undefined && request.urlParams !== undefined) {
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
            const contexts = error === null || error === void 0 ? void 0 : error.validationErrorContexts;
            if (Array.isArray(contexts) && (error instanceof runtime_1.ValidationError || (error === null || error === void 0 ? void 0 : error.name) === 'ValidationError')) {
                aggregatedContexts.push(...contexts);
                continue;
            }
            throw error;
        }
    }
    if (aggregatedContexts.length > 0) {
        const err = new runtime_1.ValidationError(aggregatedContexts);
        const joined = aggregatedContexts.map((c) => c.message).join('; ');
        Object.defineProperty(err, 'message', {
            value: `validation failed: ${joined}`,
            writable: true,
            configurable: true,
        });
        throw err;
    }
}
const SANDBOX_QRIS_GUIDANCE_HINT_SUCCESS = 'If you want to use QRIS and it is not showing in payment methods, make sure you already fill externalStoreId. See https://dashboard.dana.id/sandbox/submerchants in the external shop id section. For QRIS, partnerReferenceNo max is 25 chars.';
const SANDBOX_QRIS_GUIDANCE_HINT_ERROR = 'If you want to use QRIS, make sure you fill externalStoreId. See https://dashboard.dana.id/sandbox/submerchants in the external shop id section. For QRIS, partnerReferenceNo max is 25 chars.';
const SANDBOX_NOT_FOUND_STORE_GUIDANCE_HINT = 'If you are using QRIS / making order for your store / submerchant, make sure externalStoreId / subMerchant exists. See https://dashboard.dana.id/sandbox/submerchants external shop id section for external store id and external division id section for submerchant';
function appendSandboxHint(responseMessage, hint, ...alreadyPresentMarkers) {
    const msg = (responseMessage !== null && responseMessage !== void 0 ? responseMessage : '').trim();
    const lowerMsg = msg.toLowerCase();
    for (const marker of alreadyPresentMarkers) {
        if (marker && lowerMsg.includes(marker.toLowerCase())) {
            return msg;
        }
    }
    if (!msg) {
        return hint;
    }
    if (msg.endsWith('.')) {
        return `${msg} ${hint}`;
    }
    return `${msg}. ${hint}`;
}
function isSuccessfulSnapResponse(responseCode) {
    return String(responseCode !== null && responseCode !== void 0 ? responseCode : '').trim().startsWith('200');
}
function shouldAppendStoreSubmerchantHint(responseCode, responseMessage) {
    const msg = String(responseMessage !== null && responseMessage !== void 0 ? responseMessage : '').toLowerCase().trim();
    if (msg.includes('invalid merchant')) {
        return true;
    }
    return String(responseCode !== null && responseCode !== void 0 ? responseCode : '').trim() === '4045408';
}
function shouldAppendQrisErrorHint(responseCode, responseMessage) {
    const code = String(responseCode !== null && responseCode !== void 0 ? responseCode : '').trim();
    if (code.startsWith('500')) {
        return true;
    }
    if (!code.startsWith('400')) {
        return false;
    }
    const msg = String(responseMessage !== null && responseMessage !== void 0 ? responseMessage : '').toLowerCase();
    return ['reference', 'store', 'merchant'].some((marker) => msg.includes(marker));
}
/**
 * True redirect Create Order only (not API).
 * API payloads also satisfy the loose Redirect instanceOf guard because they share
 * base fields; payOptionDetails is the discriminator (matches Go/PHP typed checks).
 */
function isCreateOrderByRedirectKind(request) {
    if (request == null) {
        return false;
    }
    if ((0, index_1.instanceOfCreateOrderByApiRequest)(request) || request.payOptionDetails !== undefined) {
        return false;
    }
    return (0, index_1.instanceOfCreateOrderByRedirectRequest)(request)
        || (request.partnerReferenceNo !== undefined && request.urlParams !== undefined);
}
function applySandboxCreateOrderHints(request, response) {
    var _a;
    if (response == null) {
        return;
    }
    const code = String((_a = response.responseCode) !== null && _a !== void 0 ? _a : '').trim();
    if (isSuccessfulSnapResponse(code)) {
        if (isCreateOrderByRedirectKind(request)) {
            const externalStoreId = request.externalStoreId;
            if (!(typeof externalStoreId === 'string' && externalStoreId.trim() !== '')) {
                response.responseMessage = appendSandboxHint(response.responseMessage, SANDBOX_QRIS_GUIDANCE_HINT_SUCCESS, 'externalstoreid', 'partnerreferenceno');
            }
        }
        return;
    }
    if (shouldAppendStoreSubmerchantHint(code, response.responseMessage)) {
        response.responseMessage = appendSandboxHint(response.responseMessage, SANDBOX_NOT_FOUND_STORE_GUIDANCE_HINT, 'externalstoreid', 'submerchant', 'external division id', 'external shop id');
        return;
    }
    if (shouldAppendQrisErrorHint(code, response.responseMessage)) {
        response.responseMessage = appendSandboxHint(response.responseMessage, SANDBOX_QRIS_GUIDANCE_HINT_ERROR, 'externalstoreid', 'partnerreferenceno');
    }
}
/**
 * Augment CreateOrder responses in sandbox with code-specific tips.
 */
function customValidationResponse(request, response) {
    if (!isSandbox() || request == null || response == null) {
        return;
    }
    applySandboxCreateOrderHints(request, response);
}
/**
 * Enrich CreateOrder HTTP errors in sandbox (keeps error; updates rawResponse / message).
 * Mirrors Go EnrichCreateOrderError / PHP enrichCreateOrderError.
 */
function enrichCreateOrderError(request, error) {
    var _a;
    if (!isSandbox() || request == null || error == null) {
        return error;
    }
    const raw = error.rawResponse;
    if (raw == null || typeof raw !== 'object') {
        return error;
    }
    const response = {
        responseCode: raw.responseCode != null ? String(raw.responseCode) : '',
        responseMessage: raw.responseMessage != null ? String(raw.responseMessage) : '',
        partnerReferenceNo: raw.partnerReferenceNo != null ? String(raw.partnerReferenceNo) : '',
    };
    const originalMsg = response.responseMessage;
    applySandboxCreateOrderHints(request, response);
    if (response.responseMessage && response.responseMessage !== originalMsg) {
        const status = (_a = error.status) !== null && _a !== void 0 ? _a : '';
        Object.defineProperty(error, 'message', {
            value: `${status}: ${response.responseMessage}`,
            writable: true,
            configurable: true,
        });
        if (error.errorMessage !== undefined) {
            error.errorMessage = response.responseMessage;
        }
    }
    // Keep enriched response on the error for callers that inspect rawResponse.
    error.rawResponse = Object.assign(Object.assign({}, raw), { responseCode: response.responseCode || raw.responseCode, responseMessage: response.responseMessage, partnerReferenceNo: response.partnerReferenceNo || raw.partnerReferenceNo });
    return error;
}
