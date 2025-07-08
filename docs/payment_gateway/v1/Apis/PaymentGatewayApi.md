# PaymentGatewayApi

You can use the APIs below to interface with DANA's `PaymentGatewayApi` API.
To start using the API, you need to destruct instantiated DANA client. This client would be a singleton object that you can use across various api and operation.

```typescript
import { Dana, PaymentGatewayApi as PaymentGatewayApiClient } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;
```

All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelOrder**](PaymentGatewayApi.md#cancelOrder) | **POST** /payment-gateway/v1.0/debit/cancel.htm | This API is used to cancel the order from merchant&#39;s platform to DANA |
| [**consultPay**](PaymentGatewayApi.md#consultPay) | **POST** /v1.0/payment-gateway/consult-pay.htm | This API is used to consult the list of payment methods or payment channels that user has and used in certain transactions or orders |
| [**createOrder**](PaymentGatewayApi.md#createOrder) | **POST** /payment-gateway/v1.0/debit/payment-host-to-host.htm | This API is used for merchant to create order in DANA side |
| [**queryPayment**](PaymentGatewayApi.md#queryPayment) | **POST** /payment-gateway/v1.0/debit/status.htm | This API is used to inquiry payment status and information from merchant&#39;s platform to DANA |
| [**refundOrder**](PaymentGatewayApi.md#refundOrder) | **POST** /payment-gateway/v1.0/debit/refund.htm | This API is used to refund the order from merchant&#39;s platform to DANA |


<a name="cancelOrder"></a>
## `cancelOrder()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `cancelOrder` |
| Request Parameters | [**CancelOrderRequest**](../Models/CancelOrderRequest.md) |
| Return Type | [**CancelOrderResponse**](../Models/CancelOrderResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;

const request: CancelOrderRequest = {
    // Define the request parameters for the API call here
};

const response: CancelOrderResponse = await PaymentGatewayApi.cancelOrder(request);
```
<a name="consultPay"></a>
## `consultPay()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `consultPay` |
| Request Parameters | [**ConsultPayRequest**](../Models/ConsultPayRequest.md) |
| Return Type | [**ConsultPayResponse**](../Models/ConsultPayResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;

const request: ConsultPayRequest = {
    // Define the request parameters for the API call here
};

const response: ConsultPayResponse = await PaymentGatewayApi.consultPay(request);
```
<a name="createOrder"></a>
## `createOrder()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `createOrder` |
| Request Parameters | [**CreateOrderRequest**](../Models/CreateOrderRequest.md) |
| Return Type | [**CreateOrderResponse**](../Models/CreateOrderResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;

const request: CreateOrderRequest = {
    // Define the request parameters for the API call here
};

const response: CreateOrderResponse = await PaymentGatewayApi.createOrder(request);
```
<a name="queryPayment"></a>
## `queryPayment()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `queryPayment` |
| Request Parameters | [**QueryPaymentRequest**](../Models/QueryPaymentRequest.md) |
| Return Type | [**QueryPaymentResponse**](../Models/QueryPaymentResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;

const request: QueryPaymentRequest = {
    // Define the request parameters for the API call here
};

const response: QueryPaymentResponse = await PaymentGatewayApi.queryPayment(request);
```
<a name="refundOrder"></a>
## `refundOrder()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `refundOrder` |
| Request Parameters | [**RefundOrderRequest**](../Models/RefundOrderRequest.md) |
| Return Type | [**RefundOrderResponse**](../Models/RefundOrderResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { PaymentGatewayApi } = danaClient;

const request: RefundOrderRequest = {
    // Define the request parameters for the API call here
};

const response: RefundOrderResponse = await PaymentGatewayApi.refundOrder(request);
```

# Enum Types
## acquirementStatus
| Value | Description |
|-------|-------------|
| `INIT` | Order is created but not paid yet |
| `SUCCESS` | Order is succeeded |
| `CLOSED` | Order is closed |
| `PAYING` | Order is paid but not finish |
| `MERCHANT_ACCEPT` | Order is accepted by merchant after order is paid for PAY-CONFIRM |
| `CANCELLED` | Order is cancelled |


## actorType
| Value | Description |
|-------|-------------|
| `USER` | User |
| `MERCHANT` | Merchant |
| `MERCHANT_OPERATOR` | Merchant operator |
| `BACK_OFFICE` | Back office |
| `SYSTEM` | System |


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

