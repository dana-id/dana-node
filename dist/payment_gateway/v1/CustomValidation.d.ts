/**
 * CustomValidation
 *
 * This module provides custom validation functions for Payment Gateway API requests.
 * Validations are registered in the validationRegistry and executed via CustomValidation().
 */
/**
 * Perform custom validations on the request based on its type
 *
 * This function checks the request structure to determine the request type and runs
 * the appropriate validations from the registry.
 *
 * @param request The request object to validate (can be any type)
 * @throws ValidationError if validation fails
 */
export declare function customValidation(request: any): void;
/**
 * Augment CreateOrder responses in sandbox with code-specific tips.
 */
export declare function customValidationResponse(request: any, response: any): void;
/**
 * Enrich CreateOrder HTTP errors in sandbox (keeps error; updates rawResponse / message).
 * Mirrors Go EnrichCreateOrderError / PHP enrichCreateOrderError.
 */
export declare function enrichCreateOrderError(request: any, error: any): any;
