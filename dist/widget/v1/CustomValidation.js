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
/**
 * Validation registry maps request class names to their validation functions
 */
const validationRegistry = {
    'WidgetPaymentRequest': [
        validateValidUpToWidgetPaymentRequest,
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
    // Check for WidgetPaymentRequest by checking if it has validUpTo and partnerReferenceNo
    if (request.validUpTo !== undefined && request.partnerReferenceNo !== undefined && request.merchantId !== undefined) {
        if (validationRegistry['WidgetPaymentRequest']) {
            for (const validator of validationRegistry['WidgetPaymentRequest']) {
                validator(request);
            }
        }
        return;
    }
    // Add more type checks here as needed
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
