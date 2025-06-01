# CreateOrderResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Response code. Refer to https://dashboard.dana.id/api-docs/read/243#paymentgatewayprod-paymentRedirect-ResponseCodeandMessage |
| **responseMessage** | **String** | ☑️ | Response message. Refer to https://dashboard.dana.id/api-docs/read/243#paymentgatewayprod-paymentRedirect-ResponseCodeandMessage |
| **referenceNo** | **String** |  | Transaction identifier on DANA system. Present if successfully processed |
| **partnerReferenceNo** | **String** | ☑️ | Transaction identifier on partner system |
| **webRedirectUrl** | **String** |  | Checkout URLs. Present if successfully processed and payment method is not OVO/Virtual Account/QRIS |
| **additionalInfo** | [**CreateOrderResponseAdditionalInfo**](CreateOrderResponseAdditionalInfo.md) |  | Additional information |
| **externalOrderId** | **String** |  | External order identifier |

[[Back to README]](../../../../README.md)
