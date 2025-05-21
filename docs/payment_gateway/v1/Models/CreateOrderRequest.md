# CreateOrderRequest
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **additionalInfo** | [**CreateOrderByApiAdditionalInfo**](CreateOrderByApiAdditionalInfo.md) |  | [optional] [default to null] |
| **partnerReferenceNo** | **String** | Transaction identifier on partner system | [default to null] |
| **merchantId** | **String** | Merchant identifier that is unique per each merchant | [default to null] |
| **subMerchantId** | **String** | Information of sub merchant identifier | [optional] [default to null] |
| **amount** | [**Money**](Money.md) |  | [default to null] |
| **externalStoreId** | **String** | Store identifier to indicate to which store this payment belongs to | [optional] [default to null] |
| **validUpTo** | **String** | The time when the payment will be automatically expired, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time)  | [optional] [default to null] |
| **disabledPayMethods** | **String** | Payment method(s) that cannot be used for this | [optional] [default to null] |
| **urlParams** | [**List**](UrlParam.md) | Notify URL that DANA must send the payment notification to | [default to null] |
| **payOptionDetails** | [**List**](PayOptionDetail.md) |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

