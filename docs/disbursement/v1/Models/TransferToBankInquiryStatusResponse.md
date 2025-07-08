# TransferToBankInquiryStatusResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list |
| **responseMessage** | **String** | ☑️ | Refer to response code list |
| **originalPartnerReferenceNo** | **String** |  | Original transaction identifier on partner system |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **serviceCode** | **String** | ☑️ | Transaction type indicator is based on the service code of the original transaction request, value always 00 |
| **amount** | [**Money**](Money.md) |  | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **latestTransactionStatus** | **String** | ☑️ | Status of latest transaction:<br> 00 - Success<br> 01 - Initiated<br> 02 - Paying<br> 03 - Pending<br> 04 - Refunded<br> 05 - Canceled<br> 06 - Failed<br> 07 - Not found  |
| **transactionStatusDesc** | **String** |  | Description of transaction status |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
