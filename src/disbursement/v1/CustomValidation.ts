/**
 * CustomValidation
 *
 * This module provides custom validation / mutation functions for Disbursement API requests.
 * Validations are registered in the validationRegistry and executed via customValidation().
 */

import { ValidationError } from '../../runtime';
import {
    instanceOfBankAccountInquiryRequest,
    instanceOfDanaAccountInquiryRequest,
    instanceOfTransferToBankRequest,
    instanceOfTransferToDanaRequest,
} from './models/index';
import type {
    BankAccountInquiryRequest,
    DanaAccountInquiryRequest,
    TransferToBankRequest,
    TransferToDanaRequest,
} from './models/index';

const ALLOWED_ACCOUNT_TYPES = new Set<string>([
    'MERCHANT_DEPOSIT_ACCOUNT',
    'SETTLEMENT_ACCOUNT',
    'DIVISION_DEPOSIT_ACCOUNT',
]);

function isSandbox(): boolean {
    const env = (process.env.DANA_ENV || process.env.ENV || 'sandbox').toLowerCase();
    return env === 'sandbox';
}

function requireNonEmpty(value: unknown, fieldPath: string): void {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new ValidationError([
            {
                field: fieldPath,
                message: `${fieldPath} is required and cannot be empty`,
            },
        ]);
    }
}

function validateAccountTypeValue(value: string, fieldPath: string): void {
    if (!ALLOWED_ACCOUNT_TYPES.has(value)) {
        throw new ValidationError([
            {
                field: fieldPath,
                message: `${fieldPath} must be one of [MERCHANT_DEPOSIT_ACCOUNT, SETTLEMENT_ACCOUNT, DIVISION_DEPOSIT_ACCOUNT]; got ${value}`,
            },
        ]);
    }
}

/** In sandbox, accountType, beneficiaryAccountName, externalDivisionId, and chargeTarget are ignored. */
function stripSandboxIgnoredFieldsBankAccountInquiry(request: BankAccountInquiryRequest): void {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete (request.additionalInfo as any).accountType;
        delete (request.additionalInfo as any).beneficiaryAccountName;
        delete (request.additionalInfo as any).externalDivisionId;
        delete (request.additionalInfo as any).chargeTarget;
    }
}

function stripSandboxIgnoredFieldsTransferToBank(request: TransferToBankRequest): void {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    delete (request as any).accountType;
    if (request.additionalInfo) {
        delete (request.additionalInfo as any).beneficiaryAccountName;
        delete (request.additionalInfo as any).externalDivisionId;
        delete (request.additionalInfo as any).chargeTarget;
    }
}

function stripSandboxIgnoredFieldsTransferToDana(request: TransferToDanaRequest): void {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete (request.additionalInfo as any).accountType;
        delete (request.additionalInfo as any).externalDivisionId;
        delete (request.additionalInfo as any).chargeTarget;
    }
}

function stripSandboxIgnoredFieldsDanaAccountInquiry(request: DanaAccountInquiryRequest): void {
    if (!isSandbox() || request === null || request === undefined) {
        return;
    }
    if (request.additionalInfo) {
        delete (request.additionalInfo as any).externalDivisionId;
        delete (request.additionalInfo as any).chargeTarget;
    }
}

/** Non-sandbox: if accountType is set, it must be a valid enum value. Empty is allowed (no default). */
function validateAccountTypeBankAccountInquiry(request: BankAccountInquiryRequest): void {
    if (isSandbox() || request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    const current = (request.additionalInfo as any).accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'additionalInfo.accountType');
}

function validateAccountTypeTransferToBank(request: TransferToBankRequest): void {
    if (isSandbox() || request === null || request === undefined) {
        return;
    }
    const current = (request as any).accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'accountType');
}

function validateAccountTypeTransferToDana(request: TransferToDanaRequest): void {
    if (isSandbox() || request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    const current = (request.additionalInfo as any).accountType;
    if (typeof current !== 'string' || current.trim() === '') {
        return;
    }
    validateAccountTypeValue(current.trim(), 'additionalInfo.accountType');
}

function validateRequiredAdditionalInfoNotEmptyBankAccountInquiry(request: BankAccountInquiryRequest): void {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
    requireNonEmpty(request.additionalInfo.beneficiaryBankCode, 'additionalInfo.beneficiaryBankCode');
}

function validateRequiredAdditionalInfoNotEmptyTransferToBank(request: TransferToBankRequest): void {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}

function validateRequiredAdditionalInfoNotEmptyTransferToDana(request: TransferToDanaRequest): void {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}

function validateRequiredAdditionalInfoNotEmptyDanaAccountInquiry(request: DanaAccountInquiryRequest): void {
    if (request === null || request === undefined || !request.additionalInfo) {
        return;
    }
    requireNonEmpty(request.additionalInfo.fundType, 'additionalInfo.fundType');
}

const validationRegistry: { [key: string]: Array<(request: any) => void> } = {
    BankAccountInquiryRequest: [
        stripSandboxIgnoredFieldsBankAccountInquiry,
        validateAccountTypeBankAccountInquiry,
        validateRequiredAdditionalInfoNotEmptyBankAccountInquiry,
    ],
    TransferToBankRequest: [
        stripSandboxIgnoredFieldsTransferToBank,
        validateAccountTypeTransferToBank,
        validateRequiredAdditionalInfoNotEmptyTransferToBank,
    ],
    TransferToDanaRequest: [
        stripSandboxIgnoredFieldsTransferToDana,
        validateAccountTypeTransferToDana,
        validateRequiredAdditionalInfoNotEmptyTransferToDana,
    ],
    DanaAccountInquiryRequest: [
        stripSandboxIgnoredFieldsDanaAccountInquiry,
        validateRequiredAdditionalInfoNotEmptyDanaAccountInquiry,
    ],
};

/**
 * Perform custom validations / mutations on the request based on its type.
 *
 * @param request The request object to validate (can be any type)
 * @throws ValidationError if validation fails
 */
export function customValidation(request: any): void {
    if (request === null || request === undefined) {
        return;
    }

    // Order matters: more specific instanceOf checks first (TransferToBank ⊆ BankAccountInquiry fields).
    let kind: string | null = null;
    if (instanceOfTransferToBankRequest(request)) {
        kind = 'TransferToBankRequest';
    } else if (instanceOfBankAccountInquiryRequest(request)) {
        kind = 'BankAccountInquiryRequest';
    } else if (instanceOfTransferToDanaRequest(request)) {
        kind = 'TransferToDanaRequest';
    } else if (instanceOfDanaAccountInquiryRequest(request)) {
        kind = 'DanaAccountInquiryRequest';
    }

    if (!kind) {
        return;
    }

    const validators = validationRegistry[kind];
    if (!validators || validators.length === 0) {
        return;
    }

    const aggregatedContexts: any[] = [];
    for (const validator of validators) {
        try {
            validator(request);
        } catch (error: any) {
            if (error instanceof ValidationError && Array.isArray((error as any).validationErrorContexts)) {
                aggregatedContexts.push(...(error as any).validationErrorContexts);
                continue;
            }
            throw error;
        }
    }

    if (aggregatedContexts.length > 0) {
        const err = new ValidationError(aggregatedContexts);
        const joined = aggregatedContexts.map((c: any) => c.message).join('; ');
        Object.defineProperty(err, 'message', {
            value: `validation failed: ${joined}`,
            writable: true,
            configurable: true,
        });
        throw err;
    }
}

const SANDBOX_POSITIVE_BENEFICIARY_ACCOUNT_NUMBER = '2460888509';
const SANDBOX_POSITIVE_BENEFICIARY_BANK_CODE = '014';
const SANDBOX_MAX_AMOUNT = 20000000;

const SANDBOX_POSITIVE_BANK_HINT =
    `For testing positive case in sandbox use beneficiaryAccountNumber ${SANDBOX_POSITIVE_BENEFICIARY_ACCOUNT_NUMBER} and beneficiaryBankCode ${SANDBOX_POSITIVE_BENEFICIARY_BANK_CODE}`;

const SANDBOX_AMOUNT_MAX_HINT =
    `In sandbox, amount.value must not exceed ${SANDBOX_MAX_AMOUNT}`;

const SANDBOX_DANA_BALANCE_LIMIT_HINT =
    'Make sure DANA balance not exceeding limit of 21000000 after topup';

function appendSandboxHint(
    responseMessage: string | undefined,
    hint: string,
    ...alreadyPresentMarkers: string[]
): string {
    const msg = (responseMessage ?? '').trim();
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

function isBankTransferRequest(request: any): boolean {
    return instanceOfBankAccountInquiryRequest(request) || instanceOfTransferToBankRequest(request);
}

function shouldAppendPositiveBankHint(responseCode: any): boolean {
    return String(responseCode ?? '').trim().startsWith('500');
}

function shouldAppendDanaBalanceHint(responseCode: any, responseMessage: any): boolean {
    const msg = String(responseMessage ?? '').toLowerCase();
    if (msg.includes('exceed') || msg.includes('melebihi')) {
        return true;
    }
    return String(responseCode ?? '').trim() === '4033802';
}

function shouldAppendAmountMaxHint(responseMessage: any): boolean {
    const msg = String(responseMessage ?? '').toLowerCase();
    return msg.includes('exceed') || msg.includes('melebihi');
}

function applySandboxDisbursementHints(request: any, response: any): void {
    if (response == null) {
        return;
    }
    const responseCode = response.responseCode;
    const responseMessage = response.responseMessage;

    let updated = String(responseMessage ?? '');

    if (isBankTransferRequest(request) && shouldAppendPositiveBankHint(responseCode)) {
        updated = appendSandboxHint(
            updated,
            SANDBOX_POSITIVE_BANK_HINT,
            SANDBOX_POSITIVE_BENEFICIARY_ACCOUNT_NUMBER,
            `beneficiarybankcode ${SANDBOX_POSITIVE_BENEFICIARY_BANK_CODE}`,
        );
    }

    if (instanceOfTransferToDanaRequest(request)) {
        if (shouldAppendDanaBalanceHint(responseCode, responseMessage)) {
            updated = appendSandboxHint(updated, SANDBOX_DANA_BALANCE_LIMIT_HINT, '21000000', 'after topup');
        }
    } else if (shouldAppendAmountMaxHint(responseMessage)) {
        updated = appendSandboxHint(updated, SANDBOX_AMOUNT_MAX_HINT, String(SANDBOX_MAX_AMOUNT));
    }

    if (updated !== String(responseMessage ?? '')) {
        response.responseMessage = updated;
    }
}

/**
 * Augment Disbursement responses in sandbox with account/amount guidance.
 */
export function customValidationResponse(request: any, response: any): void {
    if (!isSandbox() || request == null || response == null) {
        return;
    }
    applySandboxDisbursementHints(request, response);
}

/**
 * Enrich Disbursement HTTP errors in sandbox (keeps error; updates rawResponse message).
 */
export function enrichDisbursementError(request: any, error: any): any {
    if (!isSandbox() || request == null || error == null) {
        return error;
    }
    const raw = error.rawResponse;
    if (raw == null || typeof raw !== 'object') {
        return error;
    }
    const response: any = {
        responseCode: raw.responseCode != null ? String(raw.responseCode) : '',
        responseMessage: raw.responseMessage != null ? String(raw.responseMessage) : '',
        partnerReferenceNo: raw.partnerReferenceNo != null ? String(raw.partnerReferenceNo) : '',
    };
    customValidationResponse(request, response);
    error.rawResponse = {
        ...raw,
        responseCode: response.responseCode || raw.responseCode,
        responseMessage: response.responseMessage,
        partnerReferenceNo: response.partnerReferenceNo || raw.partnerReferenceNo,
    };
    return error;
}

/**
 * Enrich TransferToDana HTTP errors in sandbox (keeps error; updates rawResponse message).
 */
export function enrichTransferToDanaError(request: any, error: any): any {
    return enrichDisbursementError(request, error);
}
