# RefundOrderRequest
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **merchantId** | **String** | Merchant identifier that is unique per each merchant | [default to null] |
| **subMerchantId** | **String** | Information of sub merchant identifier | [optional] [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **originalCaptureNo** | **String** | DANA&#39;s capture identifier. Use to refund the corresponding capture order | [optional] [default to null] |
| **partnerRefundNo** | **String** | Reference number from merchant for the refund | [default to null] |
| **refundAmount** | [**Money**](Money.md) | Refund amount. Contains two sub-fields - 1. Value (Transaction amount, including the cents) and 2. Currency (Currency code based on ISO) | [default to null] |
| **externalStoreId** | **String** | Store identifier to indicate to which store this payment belongs to | [optional] [default to null] |
| **reason** | **String** | Refund reason | [optional] [default to null] |
| **additionalInfo** | [**RefundOrderRequestAdditionalInfo**](RefundOrderRequestAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

