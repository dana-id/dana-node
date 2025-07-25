# MerchantManagementApi

You can use the APIs below to interface with DANA's `MerchantManagementApi` API.
To start using the API, you need to destruct instantiated DANA client. This client would be a singleton object that you can use across various api and operation.

```typescript
import { Dana, MerchantManagementApi as MerchantManagementApiClient } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;
```
## Additional Documentation
* [Enum Types](#enum-types) - List of available enum constants
* [Webhook Parser](#webhookparser) - Webhook handling


All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path (for sandbox it is http://api.sandbox.dana.id).

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createDivision**](MerchantManagementApi.md#createDivision) | **POST** /dana/merchant/division/createDivision.htm | This API is used to create a new division |
| [**createShop**](MerchantManagementApi.md#createShop) | **POST** /dana/merchant/shop/createShop.htm | Create shop under merchant or division |
| [**queryDivision**](MerchantManagementApi.md#queryDivision) | **POST** /dana/merchant/division/queryDivision.htm | This API is used to obtain information of division |
| [**queryMerchantResource**](MerchantManagementApi.md#queryMerchantResource) | **POST** /dana/merchant/queryMerchantResource.htm | The interface is check merchant resource info (account balance merchant) |
| [**queryShop**](MerchantManagementApi.md#queryShop) | **POST** /dana/merchant/shop/queryShop.htm | This API is used to obtain information of shop information |
| [**updateDivision**](MerchantManagementApi.md#updateDivision) | **POST** /dana/merchant/division/updateDivision.htm | This API is used to update the division information |
| [**updateShop**](MerchantManagementApi.md#updateShop) | **POST** /dana/merchant/shop/updateShop.htm | This API is used to update the shop information |


<a name="createDivision"></a>
## `createDivision()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `createDivision` |
| Request Parameters | [**CreateDivisionRequest**](../Models/CreateDivisionRequest.md) |
| Return Type | [**CreateDivisionResponse**](../Models/CreateDivisionResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: CreateDivisionRequest = {
    // Define the request parameters for the API call here
};

const response: CreateDivisionResponse = await MerchantManagementApi.createDivision(request);
```
<a name="createShop"></a>
## `createShop()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `createShop` |
| Request Parameters | [**CreateShopRequest**](../Models/CreateShopRequest.md) |
| Return Type | [**CreateShopResponse**](../Models/CreateShopResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: CreateShopRequest = {
    // Define the request parameters for the API call here
};

const response: CreateShopResponse = await MerchantManagementApi.createShop(request);
```
<a name="queryDivision"></a>
## `queryDivision()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `queryDivision` |
| Request Parameters | [**QueryDivisionRequest**](../Models/QueryDivisionRequest.md) |
| Return Type | [**QueryDivisionResponse**](../Models/QueryDivisionResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: QueryDivisionRequest = {
    // Define the request parameters for the API call here
};

const response: QueryDivisionResponse = await MerchantManagementApi.queryDivision(request);
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
const { MerchantManagementApi } = danaClient;

const request: QueryMerchantResourceRequest = {
    // Define the request parameters for the API call here
};

const response: QueryMerchantResourceResponse = await MerchantManagementApi.queryMerchantResource(request);
```
<a name="queryShop"></a>
## `queryShop()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `queryShop` |
| Request Parameters | [**QueryShopRequest**](../Models/QueryShopRequest.md) |
| Return Type | [**QueryShopResponse**](../Models/QueryShopResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: QueryShopRequest = {
    // Define the request parameters for the API call here
};

const response: QueryShopResponse = await MerchantManagementApi.queryShop(request);
```
<a name="updateDivision"></a>
## `updateDivision()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `updateDivision` |
| Request Parameters | [**UpdateDivisionRequest**](../Models/UpdateDivisionRequest.md) |
| Return Type | [**UpdateDivisionResponse**](../Models/UpdateDivisionResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: UpdateDivisionRequest = {
    // Define the request parameters for the API call here
};

const response: UpdateDivisionResponse = await MerchantManagementApi.updateDivision(request);
```
<a name="updateShop"></a>
## `updateShop()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `updateShop` |
| Request Parameters | [**UpdateShopRequest**](../Models/UpdateShopRequest.md) |
| Return Type | [**UpdateShopResponse**](../Models/UpdateShopResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.ENV or "sandbox" or "production"
});
const { MerchantManagementApi } = danaClient;

const request: UpdateShopRequest = {
    // Define the request parameters for the API call here
};

const response: UpdateShopResponse = await MerchantManagementApi.updateShop(request);
```

# Enum Types
# Enum Types

Example Usage:
```node
import { EnvInfoSourcePlatformEnum } from 'dana-node/dist/merchant_management/v1';

const ipg = EnvInfoSourcePlatformEnum.Ipg;
```

## ActorTypeEnum (actorType)
| Value | Description |
|-------|-------------|
| `User` | User |
| `Merchant` | Merchant<br |
| `MerchantOperator` | Merchant operator |
| `BackOffice` | Back office |
| `System` | System |


## BusinessEntityEnum (businessEntity)
| Value | Description |
|-------|-------------|
| `Pt` |  |
| `Cv` |  |
| `Individu` |  |
| `UsahaDagang` |  |
| `Yayasan` |  |
| `Koperasi` |  |


## DivisionIdTypeEnum (divisionIdType)
| Value | Description |
|-------|-------------|
| `InnerId` |  |
| `ExternalId` |  |


## DivisionTypeEnum (divisionType)
| Value | Description |
|-------|-------------|
| `Region` |  |
| `Area` |  |
| `Branch` |  |
| `Outlet` |  |
| `Store` |  |
| `Kiosk` |  |
| `Stall` |  |
| `Counter` |  |
| `Booth` |  |
| `PointOfSale` |  |
| `VendingMachine` |  |


## DocTypeEnum (docType)
| Value | Description |
|-------|-------------|
| `Ktp` |  |
| `Sim` |  |
| `Siup` |  |
| `Nib` |  |


## LoyaltyEnum (loyalty)
| Value | Description |
|-------|-------------|
| `True` |  |
| `False` |  |


## OrderTerminalTypeEnum (orderTerminalType)
| Value | Description |
|-------|-------------|
| `App` | Mobile Application |
| `Web` | Browser Web |
| `Wap` | Mobile Wap |
| `System` | System Call |


## OwnerIdTypeEnum (ownerIdType)
| Value | Description |
|-------|-------------|
| `Ktp` |  |
| `Sim` |  |
| `Passport` |  |
| `Siup` |  |
| `Nib` |  |


## ParentRoleTypeEnum (parentRoleType)
| Value | Description |
|-------|-------------|
| `Merchant` |  |
| `Division` |  |
| `ExternalDivision` |  |


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


## PgDivisionFlagEnum (pgDivisionFlag)
| Value | Description |
|-------|-------------|
| `True` |  |
| `False` |  |


## ResourceTypeEnum (resourceType)
| Value | Description |
|-------|-------------|
| `MerchantDepositBalance` |  |
| `MerchantAvailableBalance` |  |
| `MerchantTotalBalance` |  |


## ResultStatusEnum (resultStatus)
| Value | Description |
|-------|-------------|
| `S` |  |
| `F` |  |
| `U` |  |


## ShopBizTypeEnum (shopBizType)
| Value | Description |
|-------|-------------|
| `Online` |  |
| `Offline` |  |


## ShopIdTypeEnum (shopIdType)
| Value | Description |
|-------|-------------|
| `InnerId` |  |
| `ExternalId` |  |


## ShopOwningEnum (shopOwning)
| Value | Description |
|-------|-------------|
| `DirectOwned` |  |
| `Franchised` |  |


## ShopParentTypeEnum (shopParentType)
| Value | Description |
|-------|-------------|
| `Merchant` |  |
| `Division` |  |
| `ExternalDivision` |  |


## SizeTypeEnum (sizeType)
| Value | Description |
|-------|-------------|
| `Umi` |  |
| `Uke` |  |
| `Ume` |  |
| `Ube` |  |


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


## VerifiedEnum (verified)
| Value | Description |
|-------|-------------|
| `True` |  |
| `False` |  |




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

