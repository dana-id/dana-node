/**
 * DateValidation
 *
 * Utility module for validating date fields, specifically validUpTo dates.
 */
/**
 * Validate that a date string is not more than 30 minutes in the future (sandbox only)
 *
 * This function checks the DANA_ENV or ENV environment variable and only validates in sandbox environment
 *
 * @param dateStr The date string to validate in RFC3339 format (e.g., "2024-01-01T12:00:00+07:00")
 * @throws Error if the date is invalid or exceeds 30 minutes in the future
 */
export declare function validateValidUpToDate(dateStr: string): void;
