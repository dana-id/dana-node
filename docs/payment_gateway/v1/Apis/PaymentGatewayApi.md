# PaymentGatewayApi

You can use the APIs below to interface with DANA's `PaymentGatewayApi` API.
To start using the API, you need to destruct instantiated DANA client or directly import the module.

```typescript
import { Dana, PaymentGatewayApi as PaymentGatewayApiClient } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
const { PaymentGatewayApi } = danaClient;

const danaPaymentGatewayApiClient = new PaymentGatewayApiClient({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});

// At this point, `PaymentGatewayApi` and `danaPaymentGatewayApiClient` will have no usage difference, for example:
// PaymentGatewayApi.
// or
// danaPaymentGatewayApiClient.
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
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
import { Dana } from 'dana-node-api-client';

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
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
