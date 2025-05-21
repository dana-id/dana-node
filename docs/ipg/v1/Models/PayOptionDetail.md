# PayOptionDetail
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **payMethod** | **String** | Payment Method, e.g. CREDIT_CARD | [default to null] |
| **payOption** | **String** | Payment option which shows the provider of this payment e.g. CREDIT_CARD_VISA | [default to null] |
| **transAmount** | [**Money**](Money.md) | Trans amount. Contains value and currency | [optional] [default to null] |
| **feeAmount** | [**Money**](Money.md) | Fee amount. Contains value and currency | [optional] [default to null] |
| **cardToken** | **String** | Card token used for this payment | [optional] [default to null] |
| **merchantToken** | **String** | Merchant token used for this payment | [optional] [default to null] |
| **additionalInfo** | [**PayOptionDetailAdditionalInfo**](PayOptionDetailAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

