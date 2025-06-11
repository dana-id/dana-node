import {
    KeyObject,
    createPublicKey,
    createHash,
    createVerify,
  } from 'node:crypto';
  import * as fs from 'node:fs';
  import { FinishNotifyRequest, FinishNotifyRequestFromJSON } from '../src/payment_gateway/v1';
  
  export class WebhookParser {
    private publicKey: KeyObject;
  
    /**
     * @param publicKey      A key in any of the supported string formats.
     * @param publicKeyPath  Path to a PEM file on disk.  **If provided, this prioritized.**
     * @throws Error if the key cannot be read / normalised / parsed.
     */
    constructor(publicKey?: string, publicKeyPath?: string) {
      let keySource: string;
  
      if (publicKeyPath) {
        try {
          keySource = fs.readFileSync(publicKeyPath, 'utf8').trim();
        } catch (e: any) {
          throw new Error(
            `Failed to read key file '${publicKeyPath}': ${e.message}`,
          );
        }
      } else if (publicKey) {
        keySource = publicKey.trim();
      } else {
        throw new Error('Either publicKey or publicKeyPath must be provided.');
      }
  
      const normalizedKeyPem = WebhookParser.normalizePemKey(keySource);
  
      try {
        this.publicKey = createPublicKey({ key: normalizedKeyPem, format: 'pem' });
      } catch (e: any) {
        throw new Error(
          `Failed to load public key: ${e.message}. Processed key:\n${normalizedKeyPem}`,
        );
      }
    }
  
    /**
     * Converts any of the accepted key formats into a standard PEM string.
     */
    private static normalizePemKey(keyInput: string): string {
      let keyContent = keyInput.trim().replace(/\\n/g, '\n');
  
      if (
        keyContent.includes('\\n') &&
        keyContent.includes('-----BEGIN') &&
        keyContent.includes('-----END')
      ) {
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
          throw new Error(
            'Key content is empty after removing whitespace and markers.',
          );
        }
  
        const keyType = 'PUBLIC KEY';
        let pem = `-----BEGIN ${keyType}-----\n`;
        for (let i = 0; i < b64.length; i += 64) {
          pem += b64.slice(i, i + 64) + '\n';
        }
        pem += `-----END ${keyType}-----\n`;
        return pem;
      }
  
      throw new Error(
        'Invalid key format: incomplete PEM markers or unrecognised structure.',
      );
    }
  
    private static minifyJson(jsonStr: string): string {
      return JSON.stringify(JSON.parse(jsonStr));
    }
  
    private static sha256LowerHex(data: string): string {
      return createHash('sha256').update(data, 'utf8').digest('hex');
    }
  
    private constructStringToVerify(
      httpMethod: string,
      relativePathUrl: string,
      body: string,
      xTimestamp: string,
    ): string {
      const minifiedBody = WebhookParser.minifyJson(body);
      const bodyHash = WebhookParser.sha256LowerHex(minifiedBody);
      return `${httpMethod}:${relativePathUrl}:${bodyHash}:${xTimestamp}`;
    }
  
    /**
     * Verifies the webhook signature and deserialises the JSON payload.
     */
    public parseWebhook(
      httpMethod: string,
      relativePathUrl: string,
      headers: Record<string, string>,
      body: string,
    ): FinishNotifyRequest {
      const xSignature = headers['X-SIGNATURE'] || headers['x-signature'];
      const xTimestamp = headers['X-TIMESTAMP'] || headers['x-timestamp'];
      if (!xSignature || !xTimestamp) {
        throw new Error('Missing X-SIGNATURE or X-TIMESTAMP header.');
      }
  
      const strToVerify = this.constructStringToVerify(
        httpMethod,
        relativePathUrl,
        body,
        xTimestamp,
      );
  
      const verifier = createVerify('RSA-SHA256');
      verifier.update(strToVerify, 'utf8');
      verifier.end();
  
      const valid = verifier.verify(
        this.publicKey,
        Buffer.from(xSignature, 'base64'),
      );
      if (!valid) {
        throw new Error('Signature verification failed.');
      }
  
      try {
        return FinishNotifyRequestFromJSON(JSON.parse(body));
      } catch {
        throw new Error('Invalid JSON in request body.');
      }
    }
  }
  