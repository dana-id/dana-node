# CancelOrderRequest
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **merchantId** | **String** | Merchant identifier that is unique per each merchant | [default to null] |
| **subMerchantId** | **String** | Information of sub merchant identifier | [optional] [default to null] |
| **reason** | **String** | Cancellation reason | [optional] [default to null] |
| **externalStoreId** | **String** | Store identifier to indicate to which store this payment belongs to | [optional] [default to null] |
| **amount** | [**Money**](Money.md) | Amount. Contains two sub fields - Value (Transaction amount, including the cents) and Currency (Currency code based on ISO 4217) | [optional] [default to null] |
| **additionalInfo** | [**Object**](.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

