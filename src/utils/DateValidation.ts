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
export function validateValidUpToDate(dateStr: string): void {
    // Only validate in sandbox environment
    const env = process.env.DANA_ENV || process.env.ENV || '';
    if (env === '' || env.toLowerCase() === 'sandbox') {
        // Parse the input date
        let inputDate: Date;
        try {
            inputDate = new Date(dateStr);
            if (isNaN(inputDate.getTime())) {
                throw new Error('Invalid date format');
            }
        } catch (error) {
            throw new Error('invalid date format for validUpTo. Expected format: YYYY-MM-DDTHH:mm:ss+07:00');
        }

        // Get current time in Jakarta timezone (GMT+7)
        // JavaScript Date objects work in UTC internally, so we need to account for timezone
        const now = new Date();
        
        // The input date string includes timezone info (e.g., +07:00), so new Date() parses it correctly
        // We compare both dates in their parsed form (which are in UTC internally)
        
        // Maximum allowed date (current time + 30 minutes)
        const maxDate = new Date(now.getTime() + (30 * 60 * 1000));

        // Check if the input date exceeds the maximum allowed date
        if (inputDate > maxDate) {
            throw new Error('validUpTo date cannot be more than 30 minutes in the future');
        }
    }
}
