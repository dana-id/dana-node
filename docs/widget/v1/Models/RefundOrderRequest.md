# RefundOrderRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalPartnerReferenceNo** | **String** | ☑️ | Original transaction identifier on partner system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **originalCaptureNo** | **String** |  | DANA's capture identifier. Use to refund the corresponding capture order |
| **partnerRefundNo** | **String** | ☑️ | Reference number from merchant for the refund |
| **refundAmount** | [**Money**](Money.md) | ☑️ | Refund amount. Contains two sub-fields - 1. Value (Transaction amount, including the cents) and 2. Currency (Currency code based on ISO) |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to |
| **reason** | **String** |  | Refund reason |
| **additionalInfo** | [**RefundOrderRequestAdditionalInfo**](RefundOrderRequestAdditionalInfo.md) |  |  |

[[Back to README]](../../../../README.md)
