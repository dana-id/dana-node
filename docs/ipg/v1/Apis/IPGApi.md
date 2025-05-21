# IPGApi

All URIs are relative to *https://api.saas.dana.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**accountUnbinding**](IPGApi.md#accountUnbinding) | **POST** /v1.0/registration-account-unbinding.htm | Account unbinding process |
| [**applyOTT**](IPGApi.md#applyOTT) | **POST** /rest/v1.1/qr/apply-ott | Apply One Time Token |
| [**applyToken**](IPGApi.md#applyToken) | **POST** /v1.0/access-token/b2b2c.htm | Account binding process to get user token |
| [**cancelOrder**](IPGApi.md#cancelOrder) | **POST** /v1.0/debit/cancel.htm | Cancel Order API |
| [**getOAuthUrl**](IPGApi.md#getOAuthUrl) | **GET** /v1.0/get-auth-code | Get OAuth 2.0 URL for end user authentication |
| [**ipgPayment**](IPGApi.md#ipgPayment) | **POST** /rest/redirection/v1.0/debit/payment-host-to-host | Process IPG payment |
| [**queryPayment**](IPGApi.md#queryPayment) | **POST** /rest/v1.1/debit/status | Query Payment API |
| [**refundOrder**](IPGApi.md#refundOrder) | **POST** /v1.0/debit/refund.htm | Refund Order API |


<a name="accountUnbinding"></a>
# **accountUnbinding**
> AccountUnbindingResponse accountUnbinding(AccountUnbindingRequest)

Account unbinding process

    This API is used to reverses the account binding process by revoking the accessToken and refreshToken

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AccountUnbindingRequest** | [**AccountUnbindingRequest**](../Models/AccountUnbindingRequest.md)| Account unbinding request body | |

### Return type

[**AccountUnbindingResponse**](../Models/AccountUnbindingResponse.md)

### Authorization

[X_PARTNER_ID](../README.md#X_PARTNER_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyOTT"></a>
# **applyOTT**
> ApplyOTTResponse applyOTT(ApplyOTTRequest)

Apply One Time Token

    This API is used to get one time token that will be used as authorization parameter upon redirecting to DANA

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ApplyOTTRequest** | [**ApplyOTTRequest**](../Models/ApplyOTTRequest.md)| Apply OTT request body | |

### Return type

[**ApplyOTTResponse**](../Models/ApplyOTTResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyToken"></a>
# **applyToken**
> ApplyTokenResponse applyToken(ApplyTokenRequest)

Account binding process to get user token

    This API is used to finalized account binding process by exchanging the authCode into accessToken that can be used as user authorization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ApplyTokenRequest** | [**ApplyTokenRequest**](../Models/ApplyTokenRequest.md)| Apply token request body | |

### Return type

[**ApplyTokenResponse**](../Models/ApplyTokenResponse.md)

### Authorization

[X_PARTNER_ID](../README.md#X_PARTNER_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="cancelOrder"></a>
# **cancelOrder**
> CancelOrderResponse cancelOrder(CancelOrderRequest)

Cancel Order API

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

<a name="getOAuthUrl"></a>
# **getOAuthUrl**
> GetOAuthUrlResponse getOAuthUrl(partnerId, timestamp, externalId, channelId, scopes, redirectUrl, state, merchantId, subMerchantId, seamlessData, lang, allowRegistration)

Get OAuth 2.0 URL for end user authentication

    TThis API is used to generate OAuth 2.0 redirect URL to DANA to initiate account binding process where the user will be able to register/login from DANA page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **partnerId** | **String**| Information of partner identifier | [default to null] |
| **timestamp** | **String**| Transaction date time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [default to null] |
| **externalId** | **String**| Information of partner identifier | [default to null] |
| **channelId** | **String**| Information of channel identifier | [default to null] |
| **scopes** | [**List**](../Models/String.md)| The scopes of the authorization | [default to null] |
| **redirectUrl** | **String**| When user authorization is success, the user will be redirected to this URL | [default to null] |
| **state** | **String**| Random string for CSRF protection purposes | [default to null] |
| **merchantId** | **String**| Merchant identifier that is unique per each merchant | [optional] [default to null] |
| **subMerchantId** | **String**| Information of sub merchant identifier | [optional] [default to null] |
| **seamlessData** | [**SeamlessData**](../Models/.md)| Option for binding process. This is a JSON object that will be automatically URL-encoded.  | [optional] [default to null] |
| **lang** | **String**| Service language code, ISO 639-1 | [optional] [default to null] |
| **allowRegistration** | **String**| If value equals true, provider may enable registration process during binding. Default true | [optional] [default to null] |

### Return type

[**GetOAuthUrlResponse**](../Models/GetOAuthUrlResponse.md)

### Authorization

[PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="ipgPayment"></a>
# **ipgPayment**
> IPGPaymentResponse ipgPayment(IPGPaymentRequest)

Process IPG payment

    This API is used to initiate payment from merchant&#39;s platform to DANA

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **IPGPaymentRequest** | [**IPGPaymentRequest**](../Models/IPGPaymentRequest.md)|  | |

### Return type

[**IPGPaymentResponse**](../Models/IPGPaymentResponse.md)

### Authorization

[ORIGIN](../README.md#ORIGIN), [X_PARTNER_ID](../README.md#X_PARTNER_ID), [CHANNEL_ID](../README.md#CHANNEL_ID), [PRIVATE_KEY](../README.md#PRIVATE_KEY), [PRIVATE_KEY_PATH](../README.md#PRIVATE_KEY_PATH), [ENV](../README.md#ENV)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="queryPayment"></a>
# **queryPayment**
> QueryPaymentResponse queryPayment(QueryPaymentRequest)

Query Payment API

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

Refund Order API

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

