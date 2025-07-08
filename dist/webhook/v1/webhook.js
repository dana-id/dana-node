"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookParser = void 0;
const node_crypto_1 = require("node:crypto");
const fs = require("node:fs");
const FinishNotifyRequest_1 = require("./FinishNotifyRequest");
class WebhookParser {
    /**
     * @param publicKey      A key in any of the supported string formats.
     * @param publicKeyPath  Path to a PEM file on disk.  **If provided, this prioritized.**
     * @throws Error if the key cannot be read / normalised / parsed.
     */
    constructor(publicKey, publicKeyPath) {
        let keySource;
        if (publicKeyPath) {
            try {
                keySource = fs.readFileSync(publicKeyPath, 'utf8').trim();
            }
            catch (e) {
                throw new Error(`Failed to read key file '${publicKeyPath}': ${e.message}`);
            }
        }
        else if (publicKey) {
            keySource = publicKey.trim();
        }
        else {
            throw new Error('Either publicKey or publicKeyPath must be provided.');
        }
        const normalizedKeyPem = WebhookParser.normalizePemKey(keySource);
        try {
            this.publicKey = (0, node_crypto_1.createPublicKey)({ key: normalizedKeyPem, format: 'pem' });
        }
        catch (e) {
            throw new Error(`Failed to load public key: ${e.message}. Processed key:\n${normalizedKeyPem}`);
        }
    }
    /**
     * Converts any of the accepted key formats into a standard PEM string.
     */
    static normalizePemKey(keyInput) {
        let keyContent = keyInput.trim().replace(/\\n/g, '\n');
        if (keyContent.includes('\\n') &&
            keyContent.includes('-----BEGIN') &&
            keyContent.includes('-----END')) {
            keyContent = keyContent.replace(/\\n/g, '\n');
        }
        const hasBegin = keyContent.includes('-----BEGIN');
        const hasEnd = keyContent.includes('-----END');
        if (hasBegin && hasEnd) {
            return keyContent;
        }
        if (!hasBegin && !hasEnd) {
            const b64 = keyContent.replace(/[\\\r\n\s]/g, '');
            if (!b64) {
                throw new Error('Key content is empty after removing whitespace and markers.');
            }
            const keyType = 'PUBLIC KEY';
            let pem = `-----BEGIN ${keyType}-----\n`;
            for (let i = 0; i < b64.length; i += 64) {
                pem += b64.slice(i, i + 64) + '\n';
            }
            pem += `-----END ${keyType}-----\n`;
            return pem;
        }
        throw new Error('Invalid key format: incomplete PEM markers or unrecognised structure.');
    }
    static minifyJson(jsonStr) {
        return JSON.stringify(JSON.parse(jsonStr));
    }
    static sha256LowerHex(data) {
        return (0, node_crypto_1.createHash)('sha256').update(data, 'utf8').digest('hex');
    }
    constructStringToVerify(httpMethod, relativePathUrl, body, xTimestamp) {
        const minifiedBody = WebhookParser.minifyJson(body);
        const bodyHash = WebhookParser.sha256LowerHex(minifiedBody);
        return `${httpMethod}:${relativePathUrl}:${bodyHash}:${xTimestamp}`;
    }
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     */
    parseWebhook(httpMethod, relativePathUrl, headers, body) {
        const xSignature = headers['X-SIGNATURE'] || headers['x-signature'];
        const xTimestamp = headers['X-TIMESTAMP'] || headers['x-timestamp'];
        if (!xSignature || !xTimestamp) {
            throw new Error('Missing X-SIGNATURE or X-TIMESTAMP header.');
        }
        const strToVerify = this.constructStringToVerify(httpMethod, relativePathUrl, body, xTimestamp);
        const verifier = (0, node_crypto_1.createVerify)('RSA-SHA256');
        verifier.update(strToVerify, 'utf8');
        verifier.end();
        const valid = verifier.verify(this.publicKey, Buffer.from(xSignature, 'base64'));
        if (!valid) {
            throw new Error('Signature verification failed.');
        }
        try {
            return (0, FinishNotifyRequest_1.FinishNotifyRequestFromJSON)(JSON.parse(body));
        }
        catch (_a) {
            throw new Error('Invalid JSON in request body.');
        }
    }
}
exports.WebhookParser = WebhookParser;
