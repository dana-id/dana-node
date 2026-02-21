/**
 * CustomValidation
 * 
 * This module provides custom validation functions for Widget API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */

import { ValidationError } from '../../runtime';
import { validateValidUpToDate } from '../../utils/DateValidation';
import type { WidgetPaymentRequest } from './models/index';

/**
 * Validation registry maps request class names to their validation functions
 */
const validationRegistry: { [key: string]: Array<(request: any) => void> } = {
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
export function customValidation(request: any): void {
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
function validateValidUpToWidgetPaymentRequest(request: WidgetPaymentRequest): void {
    if (request === null || request === undefined) {
        return;
    }

    if (request.validUpTo !== null && request.validUpTo !== undefined) {
        try {
            validateValidUpToDate(request.validUpTo);
        } catch (error: any) {
            throw new ValidationError([
                {
                    field: 'validUpTo',
                    message: 'validUpTo validation failed: ' + (error?.message || String(error))
                }
            ]);
        }
    }
}
