# CancelOrderResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Response code. Refer to https://dashboard.dana.id/api-docs/read/117#HTML-API-CancelOrder-ResponseCodeandMessage | [default to null] |
| **responseMessage** | **String** | Response message. Refer to https://dashboard.dana.id/api-docs/read/117#HTML-API-CancelOrder-ResponseCodeandMessage | [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system. Present if successfully processed | [optional] [default to null] |
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **cancelTime** | **String** | Cancellation date time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time). Present if successfully processed | [optional] [default to null] |
| **transactionDate** | **String** | Transaction date, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [optional] [default to null] |
| **additionalInfo** | [**Object**](.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

