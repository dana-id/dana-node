# CancelOrderResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list |
| **responseMessage** | **String** | ☑️ | Refer to response code list |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalPartnerReferenceNo** | **String** | ☑️ | Original transaction identifier on partner system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **cancelTime** | **String** |  | Cancellation date time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **transactionDate** | **String** |  | Transaction date, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
