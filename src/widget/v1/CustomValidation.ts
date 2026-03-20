/**
 * CustomValidation
 * 
 * This module provides custom validation functions for Widget API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */

import { ValidationError } from '../../runtime';
import { validateValidUpToDate } from '../../utils/DateValidation';
import type { WidgetPaymentRequest, ApplyTokenAuthorizationCodeRequest, ApplyTokenRefreshTokenRequest } from './models/index';

/**
 * Validation registry maps request class names to their validation functions
 */
const validationRegistry: { [key: string]: Array<(request: any) => void> } = {
    'WidgetPaymentRequest': [
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
export function customValidation(request: any): void {
    if (request === null || request === undefined) {
        return;
    }

    // Determine request kind (heuristic checks so it works with both direct struct creation and runtime models)
    let kind: string | null = null;

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
        throw new ValidationError(aggregatedContexts);
    }
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

function containsForbiddenAuthCodeDelimiters(authCode: string): boolean {
    // Merchants must not paste URL query parameters into authCode
    return authCode.includes('&') || authCode.includes('=');
}

/**
 * ApplyTokenAuthorizationCodeRequest.authCode must not contain '&' or '='.
 */
function validateApplyTokenAuthCodeNotFromQueryStringAuthorizationCode(request: ApplyTokenAuthorizationCodeRequest): void {
    if (request === null || request === undefined) {
        return;
    }

    const authCode = request.authCode ?? '';
    if (authCode && containsForbiddenAuthCodeDelimiters(authCode)) {
        throw new ValidationError([
            {
                field: 'authCode',
                message: "authCode must not contain URL query delimiter characters ('&' or '=')",
            },
        ]);
    }
}

/**
 * ApplyTokenRefreshTokenRequest: only validate if authCode is non-nil and non-empty after trimming.
 */
function validateApplyTokenAuthCodeNotFromQueryStringRefreshToken(request: ApplyTokenRefreshTokenRequest): void {
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
        throw new ValidationError([
            {
                field: 'authCode',
                message: "authCode must not contain URL query delimiter characters ('&' or '=')",
            },
        ]);
    }
}
