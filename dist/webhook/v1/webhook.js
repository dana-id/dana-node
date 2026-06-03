"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookParser = void 0;
const node_crypto_1 = require("node:crypto");
const fs = require("node:fs");
const FinishNotifyRequest_1 = require("./FinishNotifyRequest");
/** Sandbox gateway public key used for webhook verification when DANA_ENV/ENV is sandbox. */
const SANDBOX_WEBHOOK_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnaKVGRbin4Wh4KN35OPh
ytJBjYTz7QZKSZjmHfiHxFmulfT87rta+IvGJ0rCBgg+1EtKk1hX8G5gPGJs1htJ
5jHa3/jCk9l+luzjnuT9UVlwJahvzmFw+IoDoM7hIPjsLtnIe04SgYo0tZBpEmkQ
vUGhmHPqYnUGSSMIpDLJDvbyr8gtwluja1SbRphgDCoYVXq+uUJ5HzPS049aaxTS
nfXh/qXuDoB9EzCrgppLDS2ubmk21+dr7WaO/3RFjnwx5ouv6w+iC1XOJKar3CTk
X6JV1OSST1C9sbPGzMHZ8AGB51BM0mok7davD/5irUk+f0C25OgzkwtxAt80dkDo
/QIDAQAB
-----END PUBLIC KEY-----`;
class WebhookParser {
    /**
     * @param publicKey      A key in any of the supported string formats.
     * @param publicKeyPath  Path to a PEM file on disk.  **If provided, this prioritized.**
     * @throws Error if the key cannot be read / normalised / parsed.
     */
    constructor(publicKey, publicKeyPath) {
        var _a, _b;
        let keySource;
        const env = ((_b = (_a = process.env.DANA_ENV) !== null && _a !== void 0 ? _a : process.env.ENV) !== null && _b !== void 0 ? _b : '').trim().toLowerCase();
        if (env === 'sandbox' || env === '') {
            keySource = SANDBOX_WEBHOOK_PUBLIC_KEY;
        }
        else if (publicKeyPath) {
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
    static hasTripleEscapedJsonStringField(jsonStr) {
        return jsonStr.includes('":"{\\\\\\"');
    }
    static processOverEscapedMinifiedJson(jsonStr) {
        const normalized = jsonStr.replace(/\\\\"/g, '"');
        return WebhookParser.processNestedJSONFields(normalized);
    }
    static processNestedJSONFields(jsonStr) {
        const normalizedStr = jsonStr.replace(/\\\\"/g, '\\"');
        return normalizedStr.replace(/"(\w+)":"(\{.*?\})"/g, (match, fieldName, jsonContent) => {
            if (jsonContent.includes('\\"')) {
                return match;
            }
            const fixedContent = jsonContent.replace(/"/g, '\\"');
            return `"${fieldName}":"${fixedContent}"`;
        });
    }
    static isValidJson(jsonStr) {
        try {
            JSON.parse(jsonStr);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    static collapseTripleBackslashQuotes(s) {
        if (!s.includes('\\\\\\"')) {
            return s;
        }
        let result = s;
        while (result.includes('\\\\\\"')) {
            result = result.replace(/\\\\\\"/g, '\\"');
        }
        return result;
    }
    static collapseDoubleBackslashQuotes(s) {
        if (!s.includes('\\\\"')) {
            return s;
        }
        return s.replace(/\\\\"/g, '"');
    }
    static removeColonSpaceBeforeQuotedValue(s) {
        if (!s.includes(': \\')) {
            return s;
        }
        return s.replace(/: (\\+)"/g, ':$1"');
    }
    static normalizeOverEscapedQuotes(s) {
        if (s.includes('\\\\"')) {
            return s.replace(/\\\\"/g, '\\"');
        }
        return s;
    }
    static ensureMinifiedJson(jsonStr) {
        if (WebhookParser.isJsonMinified(jsonStr) && !WebhookParser.hasTripleEscapedJsonStringField(jsonStr)) {
            return jsonStr;
        }
        if (WebhookParser.isJsonMinified(jsonStr)) {
            return WebhookParser.processOverEscapedMinifiedJson(jsonStr);
        }
        const normalizedStr = jsonStr.replace(/\\\\"/g, '\\"');
        const processedStr = WebhookParser.processNestedJSONFields(normalizedStr);
        if (WebhookParser.isJsonMinified(processedStr)) {
            return processedStr;
        }
        return JSON.stringify(JSON.parse(processedStr));
    }
    static bodyFormsForSignature(requestBody) {
        const seen = new Set();
        const forms = [];
        const add = (form) => {
            if (form && !seen.has(form)) {
                seen.add(form);
                forms.push(form);
            }
        };
        const tripleCollapsed = WebhookParser.collapseTripleBackslashQuotes(requestBody);
        if (tripleCollapsed !== requestBody && WebhookParser.isValidJson(tripleCollapsed)) {
            add(tripleCollapsed);
        }
        // Space before triple-backslash-quote (`: \\\"`) is not handled by removeColonSpace alone
        // because it only matches `: \"`. Collapse first, then strip spaces.
        const tripleCollapsedSpaced = WebhookParser.removeColonSpaceBeforeQuotedValue(tripleCollapsed);
        if (tripleCollapsedSpaced !== tripleCollapsed && WebhookParser.isValidJson(tripleCollapsedSpaced)) {
            add(tripleCollapsedSpaced);
        }
        let collapsed = WebhookParser.collapseDoubleBackslashQuotes(requestBody);
        if (collapsed !== requestBody && WebhookParser.isValidJson(collapsed)) {
            add(collapsed);
        }
        const spaced = WebhookParser.removeColonSpaceBeforeQuotedValue(requestBody);
        if (spaced !== requestBody && WebhookParser.isValidJson(spaced)) {
            add(spaced);
        }
        collapsed = WebhookParser.collapseTripleBackslashQuotes(spaced);
        if (collapsed !== requestBody && WebhookParser.isValidJson(collapsed)) {
            add(collapsed);
        }
        if (WebhookParser.isValidJson(requestBody)) {
            add(requestBody);
        }
        // Keep this compatibility candidate for payloads that embed JSON-in-string fields
        // with escaping forms that differ across runtimes.
        const nestedFixed = WebhookParser.processNestedJSONFields(requestBody);
        if (nestedFixed !== requestBody && WebhookParser.isValidJson(nestedFixed)) {
            add(nestedFixed);
        }
        const normalized = WebhookParser.normalizeOverEscapedQuotes(requestBody);
        if (normalized !== requestBody && WebhookParser.isJsonMinified(normalized) && WebhookParser.isValidJson(normalized)) {
            add(normalized);
        }
        try {
            add(WebhookParser.ensureMinifiedJson(requestBody));
        }
        catch (_a) {
            // keep existing candidates; some payload variants are not safely minifiable as text
        }
        if (forms.length === 0) {
            throw new Error('failed to prepare any signature body form');
        }
        return forms;
    }
    static isJsonMinified(jsonStr) {
        const indicators = [': ', ', ', '{ ', '[ ', '\n', '\t', '\r'];
        return !indicators.some((indicator) => jsonStr.includes(indicator));
    }
    static sha256LowerHex(data) {
        return (0, node_crypto_1.createHash)('sha256').update(data, 'utf8').digest('hex');
    }
    constructStringToVerify(httpMethod, relativePathUrl, body, xTimestamp) {
        const path = relativePathUrl.startsWith('/') ? relativePathUrl : `/${relativePathUrl}`;
        const bodyHash = WebhookParser.sha256LowerHex(body);
        return `${httpMethod.toUpperCase()}:${path}:${bodyHash}:${xTimestamp}`;
    }
    verifySignature(httpMethod, relativePathUrl, body, xTimestamp, xSignature) {
        const bodyForms = WebhookParser.bodyFormsForSignature(body);
        const signatureBuffer = Buffer.from(xSignature, 'base64');
        for (const bodyForm of bodyForms) {
            const strToVerify = this.constructStringToVerify(httpMethod, relativePathUrl, bodyForm, xTimestamp);
            let verifier = (0, node_crypto_1.createVerify)('RSA-SHA256');
            verifier.update(strToVerify, 'utf8');
            verifier.end();
            if (verifier.verify(this.publicKey, signatureBuffer)) {
                return;
            }
        }
        throw new Error('Signature verification failed.');
    }
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     * Uses the FinishNotifyRequestFromJSON function which now handles missing fields flexibly.
     */
    parseWebhook(httpMethod, relativePathUrl, headers, body) {
        const xSignature = headers['X-SIGNATURE'] || headers['x-signature'] || headers['X-Signature'] || headers['x-Signature'];
        const xTimestamp = headers['X-TIMESTAMP'] || headers['x-timestamp'] || headers['X-Timestamp'] || headers['x-Timestamp'];
        if (!xSignature || !xTimestamp) {
            throw new Error('Missing X-SIGNATURE or X-TIMESTAMP header.');
        }
        this.verifySignature(httpMethod, relativePathUrl, body, xTimestamp, xSignature);
        try {
            return (0, FinishNotifyRequest_1.FinishNotifyRequestFromJSON)(JSON.parse(body));
        }
        catch (_a) {
            try {
                // Legacy test payloads may contain JSON-in-string fields that are not escaped
                // in a way JSON.parse accepts directly; try the same textual normalization used
                // by signature candidates before minification fallback.
                const nestedNormalizedBody = WebhookParser.processNestedJSONFields(body);
                return (0, FinishNotifyRequest_1.FinishNotifyRequestFromJSON)(JSON.parse(nestedNormalizedBody));
            }
            catch (_b) {
                try {
                    const parseableBody = WebhookParser.ensureMinifiedJson(body);
                    return (0, FinishNotifyRequest_1.FinishNotifyRequestFromJSON)(JSON.parse(parseableBody));
                }
                catch (error) {
                    throw new Error(`Failed to process request body: ${error.message}`);
                }
            }
        }
    }
}
exports.WebhookParser = WebhookParser;
