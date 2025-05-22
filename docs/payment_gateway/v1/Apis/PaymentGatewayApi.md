# PaymentGatewayApi

All URIs are relative to *https://api.saas.dana.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelOrder**](PaymentGatewayApi.md#cancelOrder) | **POST** /payment-gateway/v1.0/debit/cancel.htm | Cancel Order - Payment Gateway |
| [**consultPay**](PaymentGatewayApi.md#consultPay) | **POST** /v1.0/payment-gateway/consult-pay.htm | Consult Pay - Payment Gateway |
| [**createOrder**](PaymentGatewayApi.md#createOrder) | **POST** /payment-gateway/v1.0/debit/payment-host-to-host.htm | Create Order - Payment Gateway |
| [**queryPayment**](PaymentGatewayApi.md#queryPayment) | **POST** /payment-gateway/v1.0/debit/status.htm | Query Payment - Payment Gateway |
| [**refundOrder**](PaymentGatewayApi.md#refundOrder) | **POST** /payment-gateway/v1.0/debit/refund.htm | Refund Order - Payment Gateway |


<a name="cancelOrder"></a>
# **cancelOrder**
> CancelOrderResponse cancelOrder(CancelOrderRequest)

Cancel Order - Payment Gateway

    This API is used to cancel the order from merchant&#39;s platform to DANA

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CancelOrderRequest** | [**CancelOrderRequest**](../Models/CancelOrderRequest.md)|  | |

### Return type

[**CancelOrderResponse**](../Models/CancelOrderResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="consultPay"></a>
# **consultPay**
> ConsultPayResponse consultPay(ConsultPayRequest)

Consult Pay - Payment Gateway

    This API is used to consult the list of payment methods or payment channels that user has and used in certain transactions or orders

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ConsultPayRequest** | [**ConsultPayRequest**](../Models/ConsultPayRequest.md)|  | |

### Return type

[**ConsultPayResponse**](../Models/ConsultPayResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createOrder"></a>
# **createOrder**
> CreateOrderResponse createOrder(CreateOrderRequest)

Create Order - Payment Gateway

    This API is used for merchant to create order in DANA side

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateOrderRequest** | [**CreateOrderRequest**](../Models/CreateOrderRequest.md)|  | |

### Return type

[**CreateOrderResponse**](../Models/CreateOrderResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="queryPayment"></a>
# **queryPayment**
> QueryPaymentResponse queryPayment(QueryPaymentRequest)

Query Payment - Payment Gateway

    This API is used to inquiry payment status and information from merchant&#39;s platform to DANA

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **QueryPaymentRequest** | [**QueryPaymentRequest**](../Models/QueryPaymentRequest.md)|  | |

### Return type

[**QueryPaymentResponse**](../Models/QueryPaymentResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="refundOrder"></a>
# **refundOrder**
> RefundOrderResponse refundOrder(RefundOrderRequest)

Refund Order - Payment Gateway

    This API is used to refund the order from merchant&#39;s platform to DANA

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **RefundOrderRequest** | [**RefundOrderRequest**](../Models/RefundOrderRequest.md)|  | |

### Return type

[**RefundOrderResponse**](../Models/RefundOrderResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

