# DisbursementApi

You can use the APIs below to interface with DANA's `DisbursementApi` API.
To start using the API, you need to destruct instantiated DANA client. This client would be a singleton object that you can use across various api and operation.

```typescript
import { Dana, DisbursementApi as DisbursementApiClient } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;
```

All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**bankAccountInquiry**](DisbursementApi.md#bankAccountInquiry) | **POST** /v1.0/emoney/bank-account-inquiry.htm | This API is used for merchant to do inquiry Bank account info via DANA |
| [**danaAccountInquiry**](DisbursementApi.md#danaAccountInquiry) | **POST** /v1.0/emoney/account-inquiry.htm | This API is used for merchant to do account inquiry to DANA |
| [**queryMerchantResource**](DisbursementApi.md#queryMerchantResource) | **POST** /merchant/queryMerchantResource.htm | The interface is check merchant resource info (account balance merchant) |
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: BankAccountInquiryRequest = {
    // Define the request parameters for the API call here
};

const response: BankAccountInquiryResponse = await DisbursementApi.bankAccountInquiry(request);
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: DanaAccountInquiryRequest = {
    // Define the request parameters for the API call here
};

const response: DanaAccountInquiryResponse = await DisbursementApi.danaAccountInquiry(request);
```
<a name="queryMerchantResource"></a>
## `queryMerchantResource()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `queryMerchantResource` |
| Request Parameters | [**QueryMerchantResourceRequest**](../Models/QueryMerchantResourceRequest.md) |
| Return Type | [**QueryMerchantResourceResponse**](../Models/QueryMerchantResourceResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: QueryMerchantResourceRequest = {
    // Define the request parameters for the API call here
};

const response: QueryMerchantResourceResponse = await DisbursementApi.queryMerchantResource(request);
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: TransferToBankRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToBankResponse = await DisbursementApi.transferToBank(request);
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: TransferToBankInquiryStatusRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToBankInquiryStatusResponse = await DisbursementApi.transferToBankInquiryStatus(request);
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: TransferToDanaRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToDanaResponse = await DisbursementApi.transferToDana(request);
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

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { DisbursementApi } = danaClient;

const request: TransferToDanaInquiryStatusRequest = {
    // Define the request parameters for the API call here
};

const response: TransferToDanaInquiryStatusResponse = await DisbursementApi.transferToDanaInquiryStatus(request);
```

# Enum Types
## actorType
| Value | Description |
|-------|-------------|
| `USER` | User |
| `MERCHANT` | Merchant<br |
| `MERCHANT_OPERATOR` | Merchant operator |
| `BACK_OFFICE` | Back office |
| `SYSTEM` | System |


## latestTransactionStatus
| Value | Description |
|-------|-------------|
| `00` |  |
| `01` |  |
| `02` |  |
| `03` |  |
| `04` |  |
| `05` |  |
| `06` |  |
| `07` |  |


## orderTerminalType
| Value | Description |
|-------|-------------|
| `APP` | Mobile Application |
| `WEB` | Browser Web |
| `WAP` | Mobile Wap |
| `SYSTEM` | System Call |


## payMethod
| Value | Description |
|-------|-------------|
| `BALANCE` | Payment method with balance |
| `COUPON` | Payment method with coupon |
| `NET_BANKING` | Payment method with internet banking |
| `CREDIT_CARD` | Payment method with credit card |
| `DEBIT_CARD` | Payment method with debit card |
| `VIRTUAL_ACCOUNT` | Payment method with virtual account |
| `OTC` | Payment method with OTC |
| `DIRECT_DEBIT_CREDIT_CARD` | Payment method with direct debit of credit card |
| `DIRECT_DEBIT_DEBIT_CARD` | Payment method with direct debit of debit card |
| `ONLINE_CREDIT` | Payment method with online Credit |
| `LOAN_CREDIT` | Payment method with DANA Cicil |
| `NETWORK_PAY` | Payment method with e-wallet |


## payOption
| Value | Description |
|-------|-------------|
| `NETWORK_PAY_PG_SPAY` | Payment method with ShopeePay e-wallet |
| `NETWORK_PAY_PG_OVO` | Payment method with OVO e-wallet |
| `NETWORK_PAY_PG_GOPAY` | Payment method with GoPay e-wallet |
| `NETWORK_PAY_PG_LINKAJA` | Payment method with LinkAja e-wallet |
| `NETWORK_PAY_PG_CARD` | Payment method with Card |
| `VIRTUAL_ACCOUNT_BCA` | Payment method with BCA virtual account |
| `VIRTUAL_ACCOUNT_BNI` | Payment method with BNI virtual account |
| `VIRTUAL_ACCOUNT_MANDIRI` | Payment method with Mandiri virtual account |
| `VIRTUAL_ACCOUNT_BRI` | Payment method with BRI virtual account |
| `VIRTUAL_ACCOUNT_BTPN` | Payment method with BTPN virtual account |
| `VIRTUAL_ACCOUNT_CIMB` | Payment method with CIMB virtual account |
| `VIRTUAL_ACCOUNT_PERMATA` | Payment method with Permata virtual account |


## resourceType
| Value | Description |
|-------|-------------|
| `MERCHANT_DEPOSIT_BALANCE` |  |
| `MERCHANT_AVAILABLE_BALANCE` |  |
| `MERCHANT_TOTAL_BALANCE` |  |


## resultStatus
| Value | Description |
|-------|-------------|
| `S` |  |
| `F` |  |
| `U` |  |


## sourcePlatform
| Value | Description |
|-------|-------------|
| `IPG` |  |


## terminalType
| Value | Description |
|-------|-------------|
| `APP` | Mobile Application |
| `WEB` | Browser Web |
| `WAP` | Mobile Wap |
| `SYSTEM` | System Call |


## type
| Value | Description |
|-------|-------------|
| `PAY_RETURN` | When finish payment, DANA will notify to the URL that has been defined by |
| `NOTIFICATION` | After the payment, the user will be redirected to merchant page, this is mandatory |




# Webhook Verification

This document explains how to use the `WebhookParser` utility from the `` SDK to securely verify and parse webhook notifications sent by DANA.

## Example

```typescript
import { WebhookParser } from '/webhook/webhook'; // Adjust import path as needed
// Assuming you are in an Express.js route handler or similar framework context.
// If using Express, you might import types like this:
// import { Request, Response } from 'express';

// Example route handler for DANA webhooks.
// Replace `AnyRequestType` and `AnyResponseType` with types from your web framework (e.g., Express's Request, Response).
async function handleDanaWebhook(req: AnyRequestType, res: AnyResponseType) {
    // Retrieve the DANA public key from environment variables or a secure configuration.
    // Option 1: Public key as a string
    const danaPublicKeyString: string | undefined = process.env.DANA_WEBHOOK_PUBLIC_KEY_STRING;
    // Option 2: Path to the public key file (recommended for production)
    const danaPublicKeyPath: string | undefined = process.env.DANA_WEBHOOK_PUBLIC_KEY_PATH;

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
[**FinishNotifyRequest**](PaymentGateway/FinishNotifyRequest.md) | Represents the standard notification payload for payment events.

