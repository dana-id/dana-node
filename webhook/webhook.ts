import { KeyObject, createPublicKey, createHash, createVerify } from 'node:crypto';
import { FinishNotifyRequest, FinishNotifyRequestFromJSON } from '../src/payment_gateway/v1';

export class WebhookParser {
    private publicKey: KeyObject;

    constructor(gatewayPublicKeyPem: string) {
        this.publicKey = createPublicKey({
            key: gatewayPublicKeyPem,
            format: 'pem',
        });
    }

    private static minifyJson(jsonStr: string): string {
        const obj = JSON.parse(jsonStr);
        return JSON.stringify(obj);
    }

    private static sha256LowerHex(data: string): string {
        return createHash('sha256').update(data, 'utf8').digest('hex');
    }

    private constructStringToVerify(
        httpMethod: string,
        relativePathUrl: string,
        body: string,
        xTimestamp: string
    ): string {
        const minifiedBody = WebhookParser.minifyJson(body);
        const bodyHash = WebhookParser.sha256LowerHex(minifiedBody);
        return `${httpMethod}:${relativePathUrl}:${bodyHash}:${xTimestamp}`;
    }

    /**
     * Parses and verifies the webhook signature, returning the parsed payload as an object.
     * Throws if verification fails or JSON is invalid.
     */
    public parseWebhook(
        httpMethod: string,
        relativePathUrl: string,
        headers: { [key: string]: string },
        body: string
    ): FinishNotifyRequest {
        const xSignature = headers['X-SIGNATURE'] || headers['x-signature'];
        const xTimestamp = headers['X-TIMESTAMP'] || headers['x-timestamp'];
        if (!xSignature || !xTimestamp) {
            throw new Error('Missing X-SIGNATURE or X-TIMESTAMP header.');
        }
        const stringToVerify = this.constructStringToVerify(
            httpMethod,
            relativePathUrl,
            body,
            xTimestamp
        );
        const signatureBuffer = Buffer.from(xSignature, 'base64');
        const verify = createVerify('RSA-SHA256');
        verify.update(stringToVerify, 'utf8');
        verify.end();
        const valid = verify.verify(
            this.publicKey,
            signatureBuffer
        );
        if (!valid) {
            throw new Error('Signature verification failed.');
        }
        try {
            return FinishNotifyRequestFromJSON(JSON.parse(body));
        } catch (e: any) {
            throw new Error('Invalid JSON in request body.');
        }
    }
}