# CreateOrderResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Response code. Refer to https://dashboard.dana.id/api-docs/read/243#paymentgatewayprod-paymentRedirect-ResponseCodeandMessage | [default to null] |
| **responseMessage** | **String** | Response message. Refer to https://dashboard.dana.id/api-docs/read/243#paymentgatewayprod-paymentRedirect-ResponseCodeandMessage | [default to null] |
| **referenceNo** | **String** | Transaction identifier on DANA system. Present if successfully processed | [optional] [default to null] |
| **partnerReferenceNo** | **String** | Transaction identifier on partner system | [default to null] |
| **webRedirectUrl** | **String** | Checkout URLs. Present if successfully processed and payment method is not OVO/Virtual Account/QRIS | [optional] [default to null] |
| **additionalInfo** | [**CreateOrderResponseAdditionalInfo**](CreateOrderResponseAdditionalInfo.md) | Additional information | [optional] [default to null] |
| **externalOrderId** | **String** | External order identifier | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

