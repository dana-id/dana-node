# FinishNotify
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on DANA system | [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **merchantId** | **String** | Unique identifier for each merchant | [default to null] |
| **subMerchantId** | **String** | Sub merchant identifier | [optional] [default to null] |
| **amount** | [**Money**](Money.md) |  | [default to null] |
| **latestTransactionStatus** | **String** | Transaction status code:&lt;br&gt; - 00 &#x3D; Success&lt;br&gt; - 05 &#x3D; Cancelled (expired)&lt;br&gt;  | [default to null] |
| **transactionStatusDesc** | **String** | Description of transaction status | [optional] [default to null] |
| **createdTime** | **String** | Transaction creation time (GMT+7, Jakarta) | [default to null] |
| **finishedTime** | **String** | Transaction completion time (GMT+7, Jakarta) | [default to null] |
| **externalStoreId** | **String** | Store identifier | [optional] [default to null] |
| **additionalInfo** | [**FinishNotifyAdditionalInfo**](FinishNotifyAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

