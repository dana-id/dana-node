# TransferToBankInquiryStatusRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **originalPartnerReferenceNo** | **String** |  | Original transaction identifier on partner system<br> Notes:<br> Required to be filled using the partnerReferenceNo that is the same as the one used in Transfer to Bank  |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **serviceCode** | **String** | ☑️ | Transaction type indicator is based on the service code of the original transaction request, value always 00 |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
