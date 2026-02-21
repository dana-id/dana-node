# WidgetPaymentRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **partnerReferenceNo** | **String** | ☑️ | Unique transaction identifier on partner system which assigned to each transaction |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  |  |
| **amount** | [**Money**](Money.md) | ☑️ |  |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to |
| **validUpTo** | **String** | ☑️ | The time when the payment will be automatically expired, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **pointOfInitiation** | **String** |  | Used for getting more info regarding source of request of the user |
| **disabledPayMethods** | **String** |  | Payment method(s) that cannot be used for this payment |
| **payOptionDetails** | [**List**](PayOptionDetail.md) |  | Payment option that will be used for this payment |
| **additionalInfo** | [**WidgetPaymentRequestAdditionalInfo**](WidgetPaymentRequestAdditionalInfo.md) | ☑️ |  |
| **urlParams** | [**List**](UrlParam.md) |  | Notify URL that DANA must send the payment notification to |

[[Back to README]](../../../../README.md)
