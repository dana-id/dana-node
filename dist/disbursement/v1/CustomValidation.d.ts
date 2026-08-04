/**
 * CustomValidation
 *
 * This module provides custom validation / mutation functions for Disbursement API requests.
 * Validations are registered in the validationRegistry and executed via customValidation().
 */
/**
 * Perform custom validations / mutations on the request based on its type.
 *
 * @param request The request object to validate (can be any type)
 * @throws ValidationError if validation fails
 */
export declare function customValidation(request: any): void;
/**
 * Augment Disbursement responses in sandbox with account/amount guidance.
 */
export declare function customValidationResponse(request: any, response: any): void;
/**
 * Enrich Disbursement HTTP errors in sandbox (keeps error; updates rawResponse / message).
 */
export declare function enrichDisbursementError(request: any, error: any): any;
/**
 * Enrich TransferToDana HTTP errors in sandbox (keeps error; updates rawResponse message).
 */
export declare function enrichTransferToDanaError(request: any, error: any): any;
