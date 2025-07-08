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
    private static minifyJson;
    private static sha256LowerHex;
    private constructStringToVerify;
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     */
    parseWebhook(httpMethod: string, relativePathUrl: string, headers: Record<string, string>, body: string): FinishNotifyRequest;
}
