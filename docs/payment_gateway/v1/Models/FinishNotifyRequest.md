# FinishNotifyRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **originalPartnerReferenceNo** | **String** | ☑️ | Original transaction identifier on DANA system |
| **originalReferenceNo** | **String** | ☑️ | Original transaction identifier on partner system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **merchantId** | **String** | ☑️ | Unique identifier per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **latestTransactionStatus** | **String** | ☑️ | Transaction status code:<br> - 00 = Success, the order has been paid<br> - 05 = Cancelled, the order has been closed because it is expired<br>  |
| **transactionStatusDesc** | **String** |  | Description of transaction status |
| **createdTime** | **String** | ☑️ | Transaction created time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **finishedTime** | **String** | ☑️ | Transaction finished time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to |
| **additionalInfo** | [**FinishNotifyRequestAdditionalInfo**](FinishNotifyRequestAdditionalInfo.md) |  | Additional information |

[[Back to README]](../../../../README.md)
