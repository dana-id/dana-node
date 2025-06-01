# RefundOrderResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Response code. Refer to https://dashboard.dana.id/api-docs/read/127#HTML-API-RefundOrder-ResponseCodeandMessage |
| **responseMessage** | **String** | ☑️ | Response message. Refer to https://dashboard.dana.id/api-docs/read/127#HTML-API-RefundOrder-ResponseCodeandMessage |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalPartnerReferenceNo** | **String** | ☑️ | Original transaction identifier on partner system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **originalCaptureNo** | **String** |  | DANA's capture identifier. Use to refund the corresponding capture order |
| **refundNo** | **String** |  | Refund number identifier on DANA system |
| **partnerRefundNo** | **String** | ☑️ | Reference number from merchant for the refund |
| **refundAmount** | [**Money**](Money.md) | ☑️ | Refund amount. Contains two sub-fields - 1. Value (Amount, including the cents) and 2. Currency (Currency code based on ISO) |
| **refundTime** | **String** |  | Refund time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
