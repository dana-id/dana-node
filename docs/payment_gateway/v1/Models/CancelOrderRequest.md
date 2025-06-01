# CancelOrderRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **originalPartnerReferenceNo** | **String** | ☑️ | Original transaction identifier on partner system |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **reason** | **String** |  | Cancellation reason |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to |
| **amount** | [**Money**](Money.md) |  | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
