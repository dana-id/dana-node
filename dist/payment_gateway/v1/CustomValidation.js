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
        if (payOptionDetail && payOptionDetail.payOption === index_2.PayOptionDetailPayOptionEnum.NetworkPayPgQris) {
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
 * Validation registry maps request type names to their validation functions
 */
const validationRegistry = {
    'CreateOrderByApiRequest': [
        validateAdditionalInfoRequired,
        validateMoneyValuePattern,
        validateValidUpToCreateOrderRequest,
        validateExternalStoreIdForQris,
    ],
    'CreateOrderByRedirectRequest': [
        validateAdditionalInfoRequired,
        validateMoneyValuePattern,
        validateValidUpToCreateOrderRequest,
    ],
    // Add more request types and their validations here as needed
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
    // Use type guards to determine the request type and run appropriate validations
    if ((0, index_1.instanceOfCreateOrderByApiRequest)(request)) {
        const validators = validationRegistry['CreateOrderByApiRequest'];
        if (validators) {
            for (const validator of validators) {
                validator(request);
            }
        }
        return;
    }
    if ((0, index_1.instanceOfCreateOrderByRedirectRequest)(request)) {
        const validators = validationRegistry['CreateOrderByRedirectRequest'];
        if (validators) {
            for (const validator of validators) {
                validator(request);
            }
        }
        return;
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
