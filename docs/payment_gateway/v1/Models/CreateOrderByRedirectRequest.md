# CreateOrderByRedirectRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **additionalInfo** | [**CreateOrderByRedirectAdditionalInfo**](CreateOrderByRedirectAdditionalInfo.md) |  |  |
| **partnerReferenceNo** | **String** | ☑️ | Transaction identifier on partner system |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to |
| **validUpTo** | **String** |  | The time when the payment will be automatically expired, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) and cannot be more than one week in the future. |
| **disabledPayMethods** | **String** |  | Payment method(s) that cannot be used for this |
| **urlParams** | [**List**](UrlParam.md) | ☑️ | Notify URL that DANA must send the payment notification to |

[[Back to README]](../../../../README.md)
