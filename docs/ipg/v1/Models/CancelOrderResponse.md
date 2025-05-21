# CancelOrderResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Refer to response code list | [default to null] |
| **responseMessage** | **String** | Refer to response code list | [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **cancelTime** | **String** | Cancellation date time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [optional] [default to null] |
| **transactionDate** | **String** | Transaction date, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [optional] [default to null] |
| **additionalInfo** | [**Object**](.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

