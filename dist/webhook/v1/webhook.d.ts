import { FinishNotifyRequest } from './FinishNotifyRequest';
export declare class WebhookParser {
    private publicKey;
    /**
     * @param publicKey      A key in any of the supported string formats.
     * @param publicKeyPath  Path to a PEM file on disk.  **If provided, this prioritized.**
     * @throws Error if the key cannot be read / normalised / parsed.
     */
    constructor(publicKey?: string, publicKeyPath?: string);
    /**
     * Converts any of the accepted key formats into a standard PEM string.
     */
    private static normalizePemKey;
    /**
   * Ensures that a JSON string is minified, checking if it's already minified first
   * to avoid unnecessary processing.
   * @param jsonStr JSON string to minify
   * @returns Minified JSON string
   */
    private static minifyJson;
    /**
     * Performs a quick check to determine if JSON is already minified
     * @param jsonStr JSON string to check
     * @returns true if JSON appears to be minified
     */
    private static isJsonMinified;
    private static sha256LowerHex;
    private constructStringToVerify;
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     * Uses the FinishNotifyRequestFromJSON function which now handles missing fields flexibly.
     */
    parseWebhook(httpMethod: string, relativePathUrl: string, headers: Record<string, string>, body: string): FinishNotifyRequest;
}
