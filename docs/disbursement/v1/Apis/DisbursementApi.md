# DisbursementApi

You can use the APIs below to interface with DANA's `DisbursementApi` API.
To start using the API, you need to destruct instantiated DANA client. This client would be a singleton object that you can use across various api and operation.

```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;
```
## Additional Documentation
* [Enum Types](#enum-types) - List of available enum constants
* [Webhook Parser](#webhookparser) - Webhook handling


All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path (for sandbox it is http://api.sandbox.dana.id).

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**bankAccountInquiry**](DisbursementApi.md#bankAccountInquiry) | **POST** /v1.0/emoney/bank-account-inquiry.htm | This API is used for merchant to do inquiry Bank account info via DANA |
| [**danaAccountInquiry**](DisbursementApi.md#danaAccountInquiry) | **POST** /v1.0/emoney/account-inquiry.htm | This API is used for merchant to do account inquiry to DANA |
| [**transferToBank**](DisbursementApi.md#transferToBank) | **POST** /v1.0/emoney/transfer-bank.htm | This API is used for merchant to do transfer to Bank request via DANA |
| [**transferToBankInquiryStatus**](DisbursementApi.md#transferToBankInquiryStatus) | **POST** /v1.0/emoney/transfer-bank-status.htm | This API is used for merchant to do inquiry status transfer to Bank transaction to DANA |
| [**transferToDana**](DisbursementApi.md#transferToDana) | **POST** /v1.0/emoney/topup.htm | This API is used for merchant to do top up request to DANA |
| [**transferToDanaInquiryStatus**](DisbursementApi.md#transferToDanaInquiryStatus) | **POST** /v1.0/emoney/topup-status.htm | This API is used for merchant to do inquiry status top up transaction to DANA |


<a name="bankAccountInquiry"></a>
## `bankAccountInquiry()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `bankAccountInquiry` |
| Request Parameters | [**BankAccountInquiryRequest**](../Models/BankAccountInquiryRequest.md) |
| Return Type | [**BankAccountInquiryResponse**](../Models/BankAccountInquiryResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { BankAccountInquiryRequest, BankAccountInquiryResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: BankAccountInquiryRequest = {
    // Define the request parameters for the API call here
};

const response: BankAccountInquiryResponse = await disbursementApi.bankAccountInquiry(request);
```
<a name="danaAccountInquiry"></a>
## `danaAccountInquiry()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `danaAccountInquiry` |
| Request Parameters | [**DanaAccountInquiryRequest**](../Models/DanaAccountInquiryRequest.md) |
| Return Type | [**DanaAccountInquiryResponse**](../Models/DanaAccountInquiryResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { DanaAccountInquiryRequest, DanaAccountInquiryResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: DanaAccountInquiryRequest = {
    // Define the request parameters for the API call here
};

const response: DanaAccountInquiryResponse = await disbursementApi.danaAccountInquiry(request);
```
<a name="transferToBank"></a>
## `transferToBank()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `transferToBank` |
| Request Parameters | [**TransferToBankRequest**](../Models/TransferToBankRequest.md) |
| Return Type | [**TransferToBankResponse**](../Models/TransferToBankResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { TransferToBankRequest, TransferToBankResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: TransferToBankRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToBankResponse = await disbursementApi.transferToBank(request);
```
<a name="transferToBankInquiryStatus"></a>
## `transferToBankInquiryStatus()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `transferToBankInquiryStatus` |
| Request Parameters | [**TransferToBankInquiryStatusRequest**](../Models/TransferToBankInquiryStatusRequest.md) |
| Return Type | [**TransferToBankInquiryStatusResponse**](../Models/TransferToBankInquiryStatusResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { TransferToBankInquiryStatusRequest, TransferToBankInquiryStatusResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: TransferToBankInquiryStatusRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToBankInquiryStatusResponse = await disbursementApi.transferToBankInquiryStatus(request);
```
<a name="transferToDana"></a>
## `transferToDana()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `transferToDana` |
| Request Parameters | [**TransferToDanaRequest**](../Models/TransferToDanaRequest.md) |
| Return Type | [**TransferToDanaResponse**](../Models/TransferToDanaResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { TransferToDanaRequest, TransferToDanaResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: TransferToDanaRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToDanaResponse = await disbursementApi.transferToDana(request);
```
<a name="transferToDanaInquiryStatus"></a>
## `transferToDanaInquiryStatus()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `transferToDanaInquiryStatus` |
| Request Parameters | [**TransferToDanaInquiryStatusRequest**](../Models/TransferToDanaInquiryStatusRequest.md) |
| Return Type | [**TransferToDanaInquiryStatusResponse**](../Models/TransferToDanaInquiryStatusResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';
import { TransferToDanaInquiryStatusRequest, TransferToDanaInquiryStatusResponse } from 'dana-node/disbursement/v1';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
    clientSecret: "YOUR_CLIENT_SECRET", // process.env.X_CLIENT_SECRET
});
const { disbursementApi } = danaClient;

const request: TransferToDanaInquiryStatusRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToDanaInquiryStatusResponse = await disbursementApi.transferToDanaInquiryStatus(request);
```

# Enum Types
In Node.js, enums are located within each model class rather than being centralized in a separate enum file. Each enum is named after its parent model.

For example, to use the chargeTarget enum from DanaAccountInquiryRequestAdditionalInfo:

```typescript
import { DanaAccountInquiryRequestAdditionalInfoChargeTargetEnum } from 'dana-node/disbursement/v1';

// Use the enum value
const chargeTarget = DanaAccountInquiryRequestAdditionalInfoChargeTargetEnum.Division;
```

In this example the **DanaAccountInquiryRequestAdditionalInfo** is the parent model and **ChargeTarget** is the enum name. In below list, the enums are listed in format of **{ParentModel}{EnumName}** (**Enum Field**).

## BankAccountInquiryRequestAdditionalInfoChargeTargetEnum (chargeTarget)
| Value | Description |
|-------|-------------|
| `Division` |  |
| `Merchant` |  |


## DanaAccountInquiryRequestAdditionalInfoChargeTargetEnum (chargeTarget)
| Value | Description |
|-------|-------------|
| `Division` |  |
| `Merchant` |  |


## TransferToBankInquiryStatusResponseLatestTransactionStatusEnum (latestTransactionStatus)
| Value | Description |
|-------|-------------|
| `00` | Success |
| `01` | Initiated |
| `02` | Paying |
| `03` | Pending |
| `04` | Refunded |
| `05` | Cancelled |
| `06` | Failed |
| `07` | Not found |


## TransferToBankRequestAdditionalInfoChargeTargetEnum (chargeTarget)
| Value | Description |
|-------|-------------|
| `Division` |  |
| `Merchant` |  |


## TransferToDanaInquiryStatusResponseLatestTransactionStatusEnum (latestTransactionStatus)
| Value | Description |
|-------|-------------|
| `00` | Success |
| `01` | Initiated |
| `02` | Paying |
| `03` | Pending |
| `04` | Refunded |
| `05` | Cancelled |
| `06` | Failed |
| `07` | Not found |


## TransferToDanaRequestAdditionalInfoChargeTargetEnum (chargeTarget)
| Value | Description |
|-------|-------------|
| `Division` |  |
| `Merchant` |  |



# Webhook Verification

This document explains how to use the `WebhookParser` utility from the `` SDK to securely verify and parse webhook notifications sent by DANA.

## Example

```typescript
import { WebhookParser } from 'dana-node/webhook'; // Adjust import path as needed
// Assuming you are in an Express.js route handler or similar framework context.
// If using Express, you might import types like this:
// import { Request, Response } from 'express';

// Example route handler for DANA webhooks.
// Replace `AnyRequestType` and `AnyResponseType` with types from your web framework (e.g., Express's Request, Response).
async function handleDanaWebhook(req: AnyRequestType, res: AnyResponseType) {
    // Retrieve the DANA public key from environment variables or a secure configuration.
    // Option 1: Public key as a string
    const danaPublicKeyString: string | undefined = process.env.DANA_PUBLIC_KEY;
    // Option 2: Path to the public key file (recommended for production)
    const danaPublicKeyPath: string | undefined = process.env.DANA_PUBLIC_KEY_PATH;

    if (!danaPublicKeyString && !danaPublicKeyPath) {
        console.error('DANA webhook public key not configured.');
        res.status(500).send('Webhook processor configuration error.'); // Or appropriate error handling
        return;
    }

    // Extract necessary data from the request object
    const httpMethod: string = req.method!; // e.g., "POST"
    const relativePathUrl: string = req.path!; // e.g., "/v1.0/debit/notify". Ensure this is the path DANA signs.

    // req.headers is typically an object like { 'header-name': 'value' }.
    // The WebhookParser expects Record<string, string>.
    // Node's IncomingHttpHeaders can have string[] for values, but X-SIGNATURE and X-TIMESTAMP
    // are expected to be single strings. Casting or careful handling might be needed.
    const headers: Record<string, string> = req.headers as Record<string, string>;

    // The body needs to be the raw JSON string.
    // If you're using a body-parsing middleware (e.g., express.json()),
    // req.body might already be a parsed JavaScript object.
    // The WebhookParser expects the raw string body that was signed.
    let requestBodyString: string;
    if (typeof req.body === 'string') {
        requestBodyString = req.body;
    } else if (req.body && typeof req.body === 'object') {
        // If req.body is an object, it means middleware parsed it.
        // We need to stringify it back to pass to the parser,
        // assuming this stringified version matches what DANA signed.
        // IMPORTANT: This assumes JSON.stringify(parsedBody) is equivalent to the raw body DANA sent.
        // For robust parsing, it's best to get the raw body *before* any JSON parsing middleware,
        // e.g., using `express.raw({ type: 'application/json' })` for specific routes.
        requestBodyString = JSON.stringify(req.body);
    } else {
        console.error('Request body is not a string or a parseable object.');
        res.status(400).send('Invalid request body format.');
        return;
    }

    // Initialize WebhookParser.
    // The constructor prioritizes publicKeyPath if both are provided.
    const parser = new WebhookParser(danaPublicKeyString, danaPublicKeyPath);

    try {
        // Verify the signature and parse the webhook payload
        const finishNotify = parser.parseWebhook(
            httpMethod,
            relativePathUrl,
            headers,
            requestBodyString
        );

        console.log('Webhook verified successfully:');
        console.log('Original Partner Reference No:', finishNotify.originalPartnerReferenceNo);
        // TODO: Process the finishNotify object (e.g., update order status in your database)

        res.status(200).send('Webhook received and verified.');
    } catch (error: any) { // Catching as 'any' to access error.message
        console.error('Webhook verification failed:', error.message);
        // Respond with an error status. DANA might retry if it receives an error.
        res.status(400).send(`Webhook verification failed: ${error.message}`);
    }
}
```

## API Reference

### `WebhookParser`

**Constructor:**

```typescript
new WebhookParser(publicKey?: string, publicKeyPath?: string)
```

-   `publicKey` (string, optional): The DANA gateway's public key as a PEM formatted string. This is used if `publicKeyPath` is not provided or is empty.
-   `publicKeyPath` (string, optional): The file path to the DANA gateway's public key PEM file. If provided, this will be prioritized over the `publicKey` string.

One of `publicKey` or `publicKeyPath` must be provided.

**Method:**

```typescript
parseWebhook(httpMethod: string, relativePathUrl: string, headers: { [key: string]: string }, body: string): FinishNotifyRequest
```

- `http_method`: HTTP method of the webhook request (e.g., `POST`).
- `relative_path_url`: The relative URL path (e.g., `/v1.0/debit/notify`).
- `headers`: Dictionary containing at least `X-SIGNATURE` and `X-TIMESTAMP`.
- `body`: Raw JSON string of the webhook payload.
- **Returns:** `FinishNotifyRequest` model with parsed data.
- **Raises:** `ValueError` if signature verification fails or the payload is invalid.

## Security Notes
- Always use the official public key provided by DANA for webhook verification.
- Reject any webhook requests that fail signature verification or have malformed payloads.
- Never trust webhook data unless it passes verification.

## Webhook Notification Models

The following webhook notification models may be received:

Model | Description
------------- | -------------
[**FinishNotifyRequest**](../../../webhook/v1/FinishNotifyRequest.md) | Represents the standard notification payload for payment events.

