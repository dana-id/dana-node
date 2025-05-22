# RefundOrderResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Response code. Refer to https://dashboard.dana.id/api-docs/read/127#HTML-API-RefundOrder-ResponseCodeandMessage | [default to null] |
| **responseMessage** | **String** | Response message. Refer to https://dashboard.dana.id/api-docs/read/127#HTML-API-RefundOrder-ResponseCodeandMessage | [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **originalCaptureNo** | **String** | DANA's capture identifier. Use to refund the corresponding capture order | [optional] [default to null] |
| **refundNo** | **String** | Refund number identifier on DANA system | [optional] [default to null] |
| **partnerRefundNo** | **String** | Reference number from merchant for the refund | [default to null] |
| **refundAmount** | [**Money**](Money.md) | Refund amount. Contains two sub-fields - 1. Value (Amount, including the cents) and 2. Currency (Currency code based on ISO) | [default to null] |
| **refundTime** | **String** | Refund time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [optional] [default to null] |
| **additionalInfo** | [**Object**](.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

