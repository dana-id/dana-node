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
    private static hasTripleEscapedJsonStringField;
    private static processOverEscapedMinifiedJson;
    private static processNestedJSONFields;
    private static isValidJson;
    private static collapseTripleBackslashQuotes;
    private static collapseDoubleBackslashQuotes;
    private static removeColonSpaceBeforeQuotedValue;
    private static normalizeOverEscapedQuotes;
    private static removeSpacesInJSONKeyNames;
    private static ensureMinifiedJson;
    private static bodyFormsForSignature;
    private static isJsonMinified;
    private static sha256LowerHex;
    private constructStringToVerify;
    private verifySignature;
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     * Uses the FinishNotifyRequestFromJSON function which now handles missing fields flexibly.
     */
    parseWebhook(httpMethod: string, relativePathUrl: string, headers: Record<string, string>, body: string): FinishNotifyRequest;
}
