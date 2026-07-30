"use strict";
/**
 * CustomValidation
 *
 * This module provides custom validation functions for Widget API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customValidation = customValidation;
const runtime_1 = require("../../runtime");
const DateValidation_1 = require("../../utils/DateValidation");
const index_1 = require("./models/index");
/** Sandbox maximum amount (major units) for Widget payment. */
const SANDBOX_MAX_AMOUNT = 10000000;
function isSandbox() {
    const env = (process.env.DANA_ENV || process.env.ENV || 'sandbox').toLowerCase();
    return env === 'sandbox';
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
 * Reject empty strings for required additionalInfo fields (productCode, envInfo.terminalType).
 * Note: mcc may be an empty string for Widget.
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
    const productCode = additionalInfo.productCode;
    if (typeof productCode !== 'string' || productCode.trim() === '') {
        contexts.push({
            field: 'additionalInfo.productCode',
            message: 'additionalInfo.productCode is required and cannot be empty',
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
 * In sandbox, amount.value must not exceed SANDBOX_MAX_AMOUNT.
 */
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
/**
 * Validation registry maps request class names to their validation functions
 */
const validationRegistry = {
    'WidgetPaymentRequest': [
        defaultSourcePlatform,
        validateRequiredAdditionalInfoFieldsNotEmpty,
        validateSandboxAmount,
        validateValidUpToWidgetPaymentRequest,
    ],
    'ApplyTokenAuthorizationCodeRequest': [
        validateApplyTokenAuthCodeNotFromQueryStringAuthorizationCode,
    ],
    'ApplyTokenRefreshTokenRequest': [
        validateApplyTokenAuthCodeNotFromQueryStringRefreshToken,
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
    // Determine request kind (heuristic checks so it works with both direct struct creation and runtime models)
    let kind = null;
    // WidgetPaymentRequest
    if (request.validUpTo !== undefined && request.partnerReferenceNo !== undefined && request.merchantId !== undefined) {
        kind = 'WidgetPaymentRequest';
    }
    // ApplyToken (oneOf)
    if (kind === null && request.grantType === 'AUTHORIZATION_CODE' && request.authCode !== undefined) {
        kind = 'ApplyTokenAuthorizationCodeRequest';
    }
    if (kind === null && request.grantType === 'REFRESH_TOKEN' && request.refreshToken !== undefined) {
        kind = 'ApplyTokenRefreshTokenRequest';
    }
    if (!kind) {
        return;
    }
    const validators = validationRegistry[kind];
    if (!validators || validators.length === 0) {
        return;
    }
    // Error aggregation: run all validators and collect all ValidationError contexts
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
/**
 * Validate validUpTo field in WidgetPaymentRequest
 *
 * @param request The request to validate
 * @throws ValidationError if validation fails
 */
function validateValidUpToWidgetPaymentRequest(request) {
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
function containsForbiddenAuthCodeDelimiters(authCode) {
    // Merchants must not paste URL query parameters into authCode
    return authCode.includes('&') || authCode.includes('=');
}
/**
 * ApplyTokenAuthorizationCodeRequest.authCode must not contain '&' or '='.
 */
function validateApplyTokenAuthCodeNotFromQueryStringAuthorizationCode(request) {
    var _a;
    if (request === null || request === undefined) {
        return;
    }
    const authCode = (_a = request.authCode) !== null && _a !== void 0 ? _a : '';
    if (authCode && containsForbiddenAuthCodeDelimiters(authCode)) {
        throw new runtime_1.ValidationError([
            {
                field: 'authCode',
                message: "authCode must not contain '&' or '='; paste only the authorization code value, not the full URL query string or including other parameters",
            },
        ]);
    }
}
/**
 * ApplyTokenRefreshTokenRequest: only validate if authCode is non-nil and non-empty after trimming.
 */
function validateApplyTokenAuthCodeNotFromQueryStringRefreshToken(request) {
    if (request === null || request === undefined) {
        return;
    }
    const authCode = request.authCode;
    if (authCode === null || authCode === undefined) {
        return;
    }
    const trimmed = authCode.trim();
    if (!trimmed) {
        return;
    }
    if (containsForbiddenAuthCodeDelimiters(trimmed)) {
        throw new runtime_1.ValidationError([
            {
                field: 'authCode',
                message: "authCode must not contain '&' or '='; paste only the authorization code value, not the full URL query string or including other parameters",
            },
        ]);
    }
}
