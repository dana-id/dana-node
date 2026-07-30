"use strict";
/**
 * CustomValidation
 *
 * This module provides custom validation / mutation functions for Disbursement API requests.
 * Validations are registered in the validationRegistry and executed via customValidation().
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customValidation = customValidation;
exports.customValidationResponse = customValidationResponse;
exports.enrichTransferToDanaError = enrichTransferToDanaError;
const runtime_1 = require("../../runtime");
const index_1 = require("./models/index");
const SANDBOX_BENEFICIARY_ACCOUNT_NUMBER = '2460888509';
const SANDBOX_BENEFICIARY_BANK_CODE = '014';
/** Sandbox maximum amount (major units) for Disbursement. */
const SANDBOX_MAX_AMOUNT = 20000000;
const ALLOWED_ACCOUNT_TYPES = new Set([
    'MERCHANT_DEPOSIT_ACCOUNT',
    'SETTLEMENT_ACCOUNT',
    'DIVISION_DEPOSIT_ACCOUNT',
]);
function isSandbox() {
    const env = (process.env.DANA_ENV || process.env.ENV || 'sandbox').toLowerCase();
    return env === 'sandbox';
}
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
function requireNonEmpty(value, fieldPath) {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new runtime_1.ValidationError([
            {
                field: fieldPath,
                message: `${fieldPath} is required and cannot be empty`,
            },
        ]);
    }
}
function validateAccountTypeValue(value, fieldPath) {
    if (!ALLOWED_ACCOUNT_TYPES.has(value)) {
        throw new runtime_1.ValidationError([
            {
                field: fieldPath,
                message: `${fieldPath} must be one of [MERCHANT_DEPOSIT_ACCOUNT, SETTLEMENT_ACCOUNT, DIVISION_DEPOSIT_ACCOUNT]; got ${value}`,
            },
        ]);
    }
}
/** In sandbox, accountType, beneficiaryAccountName, externalDivisionId, and chargeTarget are ignored. */
function stripSandboxIgnoredFieldsBankAccountInquiry(request) {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete request.additionalInfo.accountType;
        delete request.additionalInfo.beneficiaryAccountName;
        delete request.additionalInfo.externalDivisionId;
        delete request.additionalInfo.chargeTarget;
    }
}
function stripSandboxIgnoredFieldsTransferToBank(request) {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    delete request.accountType;
    if (request.additionalInfo) {
        delete request.additionalInfo.beneficiaryAccountName;
        delete request.additionalInfo.externalDivisionId;
        delete request.additionalInfo.chargeTarget;
    }
}
function stripSandboxIgnoredFieldsTransferToDana(request) {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete request.additionalInfo.accountType;
        delete request.additionalInfo.externalDivisionId;
        delete request.additionalInfo.chargeTarget;
    }
}
function stripSandboxIgnoredFieldsDanaAccountInquiry(request) {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete request.additionalInfo.externalDivisionId;
        delete request.additionalInfo.chargeTarget;
    }
}
/** Non-sandbox: if accountType is set, it must be a valid enum value. Empty is allowed (no default). */
function validateAccountTypeBankAccountInquiry(request) {
    if (isSandbox() || request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    const current = request.additionalInfo.accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'additionalInfo.accountType');
}
function validateAccountTypeTransferToBank(request) {
    if (isSandbox() || request === null || request === undefined) {
        return;
    }
    const current = request.accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'accountType');
}
function validateAccountTypeTransferToDana(request) {
    if (isSandbox() || request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    const current = request.additionalInfo.accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'additionalInfo.accountType');
}
/** In sandbox, beneficiaryAccountNumber must be 2460888509 and beneficiaryBankCode must be 014. */
function validateSandboxBeneficiaryBankAccountInquiry(request) {
    var _a, _b;
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    const contexts = [];
    const accountNumber = typeof request.beneficiaryAccountNumber === 'string'
        ? request.beneficiaryAccountNumber.trim()
        : '';
    if (accountNumber !== SANDBOX_BENEFICIARY_ACCOUNT_NUMBER) {
        contexts.push({
            field: 'beneficiaryAccountNumber',
            message: `in sandbox, beneficiaryAccountNumber must be ${SANDBOX_BENEFICIARY_ACCOUNT_NUMBER}; got ${request.beneficiaryAccountNumber}`,
        });
    }
    const bankCode = typeof ((_a = request.additionalInfo) === null || _a === void 0 ? void 0 : _a.beneficiaryBankCode) === 'string'
        ? request.additionalInfo.beneficiaryBankCode.trim()
        : '';
    if (bankCode !== SANDBOX_BENEFICIARY_BANK_CODE) {
        contexts.push({
            field: 'additionalInfo.beneficiaryBankCode',
            message: `in sandbox, additionalInfo.beneficiaryBankCode must be ${SANDBOX_BENEFICIARY_BANK_CODE}; got ${(_b = request.additionalInfo) === null || _b === void 0 ? void 0 : _b.beneficiaryBankCode}`,
        });
    }
    if (contexts.length > 0) {
        throw new runtime_1.ValidationError(contexts);
    }
}
function validateSandboxBeneficiaryTransferToBank(request) {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    const contexts = [];
    const accountNumber = typeof request.beneficiaryAccountNumber === 'string'
        ? request.beneficiaryAccountNumber.trim()
        : '';
    if (accountNumber !== SANDBOX_BENEFICIARY_ACCOUNT_NUMBER) {
        contexts.push({
            field: 'beneficiaryAccountNumber',
            message: `in sandbox, beneficiaryAccountNumber must be ${SANDBOX_BENEFICIARY_ACCOUNT_NUMBER}; got ${request.beneficiaryAccountNumber}`,
        });
    }
    const bankCode = typeof request.beneficiaryBankCode === 'string'
        ? request.beneficiaryBankCode.trim()
        : '';
    if (bankCode !== SANDBOX_BENEFICIARY_BANK_CODE) {
        contexts.push({
            field: 'beneficiaryBankCode',
            message: `in sandbox, beneficiaryBankCode must be ${SANDBOX_BENEFICIARY_BANK_CODE}; got ${request.beneficiaryBankCode}`,
        });
    }
    if (contexts.length > 0) {
        throw new runtime_1.ValidationError(contexts);
    }
}
function validateRequiredAdditionalInfoNotEmptyBankAccountInquiry(request) {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
    requireNonEmpty(request.additionalInfo.beneficiaryBankCode, 'additionalInfo.beneficiaryBankCode');
}
function validateRequiredAdditionalInfoNotEmptyTransferToBank(request) {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}
function validateRequiredAdditionalInfoNotEmptyTransferToDana(request) {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}
function validateRequiredAdditionalInfoNotEmptyDanaAccountInquiry(request) {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}
const validationRegistry = {
    BankAccountInquiryRequest: [
        stripSandboxIgnoredFieldsBankAccountInquiry,
        validateAccountTypeBankAccountInquiry,
        validateSandboxBeneficiaryBankAccountInquiry,
        validateSandboxAmount,
        validateRequiredAdditionalInfoNotEmptyBankAccountInquiry,
    ],
    TransferToBankRequest: [
        stripSandboxIgnoredFieldsTransferToBank,
        validateAccountTypeTransferToBank,
        validateSandboxBeneficiaryTransferToBank,
        validateSandboxAmount,
        validateRequiredAdditionalInfoNotEmptyTransferToBank,
    ],
    TransferToDanaRequest: [
        stripSandboxIgnoredFieldsTransferToDana,
        validateAccountTypeTransferToDana,
        validateSandboxAmount,
        validateRequiredAdditionalInfoNotEmptyTransferToDana,
    ],
    DanaAccountInquiryRequest: [
        stripSandboxIgnoredFieldsDanaAccountInquiry,
        validateSandboxAmount,
        validateRequiredAdditionalInfoNotEmptyDanaAccountInquiry,
    ],
};
/**
 * Perform custom validations / mutations on the request based on its type.
 *
 * @param request The request object to validate (can be any type)
 * @throws ValidationError if validation fails
 */
function customValidation(request) {
    if (request === null || request === undefined) {
        return;
    }
    // Order matters: more specific instanceOf checks first (TransferToBank ⊆ BankAccountInquiry fields).
    let kind = null;
    if ((0, index_1.instanceOfTransferToBankRequest)(request)) {
        kind = 'TransferToBankRequest';
    }
    else if ((0, index_1.instanceOfBankAccountInquiryRequest)(request)) {
        kind = 'BankAccountInquiryRequest';
    }
    else if ((0, index_1.instanceOfTransferToDanaRequest)(request)) {
        kind = 'TransferToDanaRequest';
    }
    else if ((0, index_1.instanceOfDanaAccountInquiryRequest)(request)) {
        kind = 'DanaAccountInquiryRequest';
    }
    if (!kind) {
        return;
    }
    const validators = validationRegistry[kind];
    if (!validators || validators.length === 0) {
        return;
    }
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
const SANDBOX_DANA_BALANCE_LIMIT_HINT = 'Make sure DANA balance not exceeding limit of 21000000 after topup';
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
function isBusinessErrorResponse(responseCode) {
    const code = String(responseCode !== null && responseCode !== void 0 ? responseCode : '').trim();
    return code === '' || !code.startsWith('200');
}
/**
 * Augment TransferToDana responses in sandbox on business errors.
 */
function customValidationResponse(request, response) {
    if (!isSandbox() || request == null || response == null) {
        return;
    }
    if (!(0, index_1.instanceOfTransferToDanaRequest)(request)) {
        return;
    }
    if (!isBusinessErrorResponse(response === null || response === void 0 ? void 0 : response.responseCode)) {
        return;
    }
    response.responseMessage = appendSandboxHint(response.responseMessage, SANDBOX_DANA_BALANCE_LIMIT_HINT, '21000000', 'after topup');
}
/**
 * Enrich TransferToDana HTTP errors in sandbox (keeps error; updates rawResponse message).
 */
function enrichTransferToDanaError(request, error) {
    if (!isSandbox() || request == null || error == null) {
        return error;
    }
    if (!(0, index_1.instanceOfTransferToDanaRequest)(request)) {
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
    customValidationResponse(request, response);
    error.rawResponse = Object.assign(Object.assign({}, raw), { responseCode: response.responseCode || raw.responseCode, responseMessage: response.responseMessage, partnerReferenceNo: response.partnerReferenceNo || raw.partnerReferenceNo });
    return error;
}
