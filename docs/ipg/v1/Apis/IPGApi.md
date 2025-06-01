# IPGApi

You can use the APIs below to interface with DANA's `IPGApi` API.
To start using the API, you need to destruct instantiated DANA client or directly import the module.

```typescript
import { Dana, IPGApi as IPGApiClient } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { IPGApi } = danaClient;

const danaIPGApiClient = new IPGApiClient({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});

// At this point, `IPGApi` and `danaIPGApiClient` will have no usage difference, for example:
// IPGApi.
// or
// danaIPGApiClient.
```

All URIs are relative to *https://api.saas.dana.id*, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**accountUnbinding**](IPGApi.md#accountUnbinding) | **POST** /v1.0/registration-account-unbinding.htm | This API is used to reverses the account binding process by revoking the accessToken and refreshToken |
| [**applyOTT**](IPGApi.md#applyOTT) | **POST** /rest/v1.1/qr/apply-ott | This API is used to get one time token that will be used as authorization parameter upon redirecting to DANA |
| [**applyToken**](IPGApi.md#applyToken) | **POST** /v1.0/access-token/b2b2c.htm | This API is used to finalized account binding process by exchanging the authCode into accessToken that can be used as user authorization |
| [**cancelOrder**](IPGApi.md#cancelOrder) | **POST** /v1.0/debit/cancel.htm | This API is used to cancel the order from merchant&#39;s platform to DANA |
| [**ipgPayment**](IPGApi.md#ipgPayment) | **POST** /rest/redirection/v1.0/debit/payment-host-to-host | This API is used to initiate payment from merchant&#39;s platform to DANA |
| [**queryPayment**](IPGApi.md#queryPayment) | **POST** /rest/v1.1/debit/status | This API is used to inquiry payment status and information from merchant&#39;s platform to DANA |
| [**refundOrder**](IPGApi.md#refundOrder) | **POST** /v1.0/debit/refund.htm | This API is used to refund the order from merchant&#39;s platform to DANA |


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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: AccountUnbindingRequest = {
    // Define the request parameters for the API call here
};

const response: AccountUnbindingResponse = await PaymentGatewayApi.accountUnbinding(request);
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: ApplyOTTRequest = {
    // Define the request parameters for the API call here
};

const response: ApplyOTTResponse = await PaymentGatewayApi.applyOTT(request);
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: ApplyTokenRequest = {
    // Define the request parameters for the API call here
};

const response: ApplyTokenResponse = await PaymentGatewayApi.applyToken(request);
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: CancelOrderRequest = {
    // Define the request parameters for the API call here
};

const response: CancelOrderResponse = await PaymentGatewayApi.cancelOrder(request);
```
<a name="ipgPayment"></a>
## `ipgPayment()` Function

### Function Signature
| Name | Value |
| ------------- | ------------- |
| Function Name | `ipgPayment` |
| Request Parameters | [**IPGPaymentRequest**](../Models/IPGPaymentRequest.md) |
| Return Type | [**IPGPaymentResponse**](../Models/IPGPaymentResponse.md) |

### Usage Example
```typescript
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: IPGPaymentRequest = {
    // Define the request parameters for the API call here
};

const response: IPGPaymentResponse = await PaymentGatewayApi.ipgPayment(request);
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const request: RefundOrderRequest = {
    // Define the request parameters for the API call here
};

const response: RefundOrderResponse = await PaymentGatewayApi.refundOrder(request);
```
