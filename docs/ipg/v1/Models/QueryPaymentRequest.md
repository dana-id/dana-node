# QueryPaymentRequest
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [optional] [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **serviceCode** | **String** | Transaction type indicator is based on the service code of the original transaction request:<br> - IPG Cashier Pay - SNAP: 54<br> - QRIS CPM (Acquirer) - SNAP: 60<br> - QRIS MPM (Acquirer) - SNAP: 47<br> - Payment Gateway: 54<br>  | [default to 54] |
| **transactionDate** | **String** | Transaction date in format YYYY-MM-DDTHH:mm:ss+07:00 (GMT+7, Jakarta time) | [optional] [default to null] |
| **amount** | [**Money**](Money.md) |  | [optional] [default to null] |
| **merchantId** | **String** | Merchant identifier that is unique per each merchant | [default to null] |
| **subMerchantId** | **String** | Information of sub merchant identifier | [optional] [default to null] |
| **externalStoreId** | **String** | Store identifier to indicate to which store this payment belongs to | [optional] [default to null] |
| **additionalInfo** | [**Object**](.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

