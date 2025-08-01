# WidgetApi

You can use the APIs below to interface with DANA's `WidgetApi` API.
To start using the API, you need to destruct instantiated DANA client. This client would be a singleton object that you can use across various api and operation.

```typescript
import { Dana, WidgetApi as WidgetApiClient } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;
```
## Additional Documentation
* [Enum Types](#enum-types) - List of available enum constants
* [Webhook Parser](#webhookparser) - Webhook handling
* [OAuth URL Generation](#oauth-url-generation) - Generate OAuth URLs for authorization


All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path (for sandbox it is http://api.sandbox.dana.id).

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**accountUnbinding**](WidgetApi.md#accountUnbinding) | **POST** /v1.0/registration-account-unbinding.htm | This API is used to reverses the account binding process by revoking the accessToken and refreshToken |
| [**applyOTT**](WidgetApi.md#applyOTT) | **POST** /rest/v1.1/qr/apply-ott | This API is used to get one time token that will be used as authorization parameter upon redirecting to DANA |
| [**applyToken**](WidgetApi.md#applyToken) | **POST** /v1.0/access-token/b2b2c.htm | This API is used to finalized account binding process by exchanging the authCode into accessToken that can be used as user authorization |
| [**balanceInquiry**](WidgetApi.md#balanceInquiry) | **POST** /v1.0/balance-inquiry.htm | This API is used to query user&#39;s DANA account balance via merchant |
| [**cancelOrder**](WidgetApi.md#cancelOrder) | **POST** /v1.0/debit/cancel.htm | This API is used to cancel the order from merchant&#39;s platform to DANA |
| [**queryPayment**](WidgetApi.md#queryPayment) | **POST** /rest/v1.1/debit/status | This API is used to inquiry payment status and information from merchant&#39;s platform to DANA |
| [**queryUserProfile**](WidgetApi.md#queryUserProfile) | **POST** /dana/member/query/queryUserProfile.htm | The API is used to query user profile such as DANA balance (unit in IDR), masked DANA phone number, KYC or OTT (one time token) between merchant server and DANA&#39;s server |
| [**refundOrder**](WidgetApi.md#refundOrder) | **POST** /v1.0/debit/refund.htm | This API is used to refund the order from merchant&#39;s platform to DANA |
| [**widgetPayment**](WidgetApi.md#widgetPayment) | **POST** /rest/redirection/v1.0/debit/payment-host-to-host | This API is used to initiate payment from merchant&#39;s platform to DANA |


<a name="accountUnbinding"></a>
## `accountUnbinding()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `accountUnbinding` |
| Request Parameters | [**AccountUnbindingRequest**](../Models/AccountUnbindingRequest.md) |
| Return Type | [**AccountUnbindingResponse**](../Models/AccountUnbindingResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: AccountUnbindingRequest = {
    // Define the request parameters for the API call here
};

const response: AccountUnbindingResponse = await WidgetApi.accountUnbinding(request);
```
<a name="applyOTT"></a>
## `applyOTT()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `applyOTT` |
| Request Parameters | [**ApplyOTTRequest**](../Models/ApplyOTTRequest.md) |
| Return Type | [**ApplyOTTResponse**](../Models/ApplyOTTResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: ApplyOTTRequest = {
    // Define the request parameters for the API call here
};

const response: ApplyOTTResponse = await WidgetApi.applyOTT(request);
```
<a name="applyToken"></a>
## `applyToken()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `applyToken` |
| Request Parameters | [**ApplyTokenRequest**](../Models/ApplyTokenRequest.md) |
| Return Type | [**ApplyTokenResponse**](../Models/ApplyTokenResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: ApplyTokenRequest = {
    // Define the request parameters for the API call here
};

const response: ApplyTokenResponse = await WidgetApi.applyToken(request);
```
<a name="balanceInquiry"></a>
## `balanceInquiry()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `balanceInquiry` |
| Request Parameters | [**BalanceInquiryRequest**](../Models/BalanceInquiryRequest.md) |
| Return Type | [**BalanceInquiryResponse**](../Models/BalanceInquiryResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: BalanceInquiryRequest = {
    // Define the request parameters for the API call here
};

const response: BalanceInquiryResponse = await WidgetApi.balanceInquiry(request);
```
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
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: CancelOrderRequest = {
    // Define the request parameters for the API call here
};

const response: CancelOrderResponse = await WidgetApi.cancelOrder(request);
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
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: QueryPaymentRequest = {
    // Define the request parameters for the API call here
};

const response: QueryPaymentResponse = await WidgetApi.queryPayment(request);
```
<a name="queryUserProfile"></a>
## `queryUserProfile()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `queryUserProfile` |
| Request Parameters | [**QueryUserProfileRequest**](../Models/QueryUserProfileRequest.md) |
| Return Type | [**QueryUserProfileResponse**](../Models/QueryUserProfileResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: QueryUserProfileRequest = {
    // Define the request parameters for the API call here
};

const response: QueryUserProfileResponse = await WidgetApi.queryUserProfile(request);
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
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: RefundOrderRequest = {
    // Define the request parameters for the API call here
};

const response: RefundOrderResponse = await WidgetApi.refundOrder(request);
```
<a name="widgetPayment"></a>
## `widgetPayment()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `widgetPayment` |
| Request Parameters | [**WidgetPaymentRequest**](../Models/WidgetPaymentRequest.md) |
| Return Type | [**WidgetPaymentResponse**](../Models/WidgetPaymentResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
const { WidgetApi } = danaClient;

const request: WidgetPaymentRequest = {
    // Define the request parameters for the API call here
};

const response: WidgetPaymentResponse = await WidgetApi.widgetPayment(request);
```

# Enum Types
# Enum Types

Example Usage:
```node
import { EnvInfoSourcePlatformEnum } from 'dana-node/dist/widget/v1';

const ipg = EnvInfoSourcePlatformEnum.Ipg;
```

## AcquirementStatusEnum (acquirementStatus)
| Value | Description |
|-------|-------------|
| `Init` |  |
| `Success` |  |
| `Closed` |  |
| `Paying` |  |
| `MerchantAccept` |  |
| `Cancelled` |  |


## ActorTypeEnum (actorType)
| Value | Description |
|-------|-------------|
| `User` | User |
| `Merchant` | Merchant<br |
| `MerchantOperator` | Merchant operator |
| `BackOffice` | Back office |
| `System` | System |


## GrantTypeEnum (grantType)
| Value | Description |
|-------|-------------|
| `AuthorizationCode` |  |


## OrderTerminalTypeEnum (orderTerminalType)
| Value | Description |
|-------|-------------|
| `App` | Mobile Application |
| `Web` | Browser Web |
| `Wap` | Mobile Wap |
| `System` | System Call |


## PayMethodEnum (payMethod)
| Value | Description |
|-------|-------------|
| `Balance` | Payment method with balance |
| `Coupon` | Payment method with coupon |
| `NetBanking` | Payment method with internet banking |
| `CreditCard` | Payment method with credit card |
| `DebitCard` | Payment method with debit card |
| `VirtualAccount` | Payment method with virtual account |
| `Otc` | Payment method with OTC |
| `DirectDebitCreditCard` | Payment method with direct debit of credit card |
| `DirectDebitDebitCard` | Payment method with direct debit of debit card |
| `OnlineCredit` | Payment method with online Credit |
| `LoanCredit` | Payment method with DANA Cicil |
| `NetworkPay` | Payment method with e-wallet |


## PayOptionEnum (payOption)
| Value | Description |
|-------|-------------|
| `NetworkPayPgSpay` | Payment method with ShopeePay e-wallet |
| `NetworkPayPgOvo` | Payment method with OVO e-wallet |
| `NetworkPayPgGopay` | Payment method with GoPay e-wallet |
| `NetworkPayPgLinkaja` | Payment method with LinkAja e-wallet |
| `NetworkPayPgCard` | Payment method with Card |
| `VirtualAccountBca` | Payment method with BCA virtual account |
| `VirtualAccountBni` | Payment method with BNI virtual account |
| `VirtualAccountMandiri` | Payment method with Mandiri virtual account |
| `VirtualAccountBri` | Payment method with BRI virtual account |
| `VirtualAccountBtpn` | Payment method with BTPN virtual account |
| `VirtualAccountCimb` | Payment method with CIMB virtual account |
| `VirtualAccountPermata` | Payment method with Permata virtual account |


## PromoTypeEnum (promoType)
| Value | Description |
|-------|-------------|
| `CashBack` |  |
| `Discount` |  |
| `Voucher` |  |
| `Point` |  |


## ResourceTypeEnum (resourceType)
| Value | Description |
|-------|-------------|
| `Balance` |  |
| `TransactionUrl` |  |
| `MaskDanaId` |  |
| `TopupUrl` |  |
| `Ott` |  |
| `UserKyc` |  |


## ResultStatusEnum (resultStatus)
| Value | Description |
|-------|-------------|
| `S` |  |
| `F` |  |
| `U` |  |


## ServiceScenarioEnum (serviceScenario)
| Value | Description |
|-------|-------------|
| `ScanAndPay` |  |
| `ExitAndPay` |  |
| `EmasPurchase` |  |


## ServiceTypeEnum (serviceType)
| Value | Description |
|-------|-------------|
| `Parking` |  |
| `Investment` |  |


## SourcePlatformEnum (sourcePlatform)
| Value | Description |
|-------|-------------|
| `Ipg` |  |


## TerminalTypeEnum (terminalType)
| Value | Description |
|-------|-------------|
| `App` | Mobile Application |
| `Web` | Browser Web |
| `Wap` | Mobile Wap |
| `System` | System Call |


## TypeEnum (type)
| Value | Description |
|-------|-------------|
| `PayReturn` | When finish payment, DANA will notify to the URL that has been defined by |
| `Notification` | After the payment, the user will be redirected to merchant page, this is mandatory |




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


## OAuth URL Generation

You can generate OAuth URLs for widget authorization using the WidgetUtils helper:

```typescript
import { WidgetUtils } from 'dana-node/widget/v1';

// Generate OAuth URL
const oauth2UrlData = {
    redirectUrl: 'https://your-redirect-url.com',
    externalId: 'your-external-id', // or use uuidv4()
    merchantId: process.env.MERCHANT_ID,
    seamlessData: {
        mobileNumber: '08xxxxxxxxx' // Optional
    }
};

const oauthUrl = WidgetUtils.generateOauthUrl(oauth2UrlData);
console.log(oauthUrl);
```

The generated URL can be used to redirect users to DANA's authorization page.
