# QueryPaymentResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Response code. Refer to https://dashboard.dana.id/api-docs/read/126#HTML-API-QueryPayment-ResponseCodeandMessage |
| **responseMessage** | **String** | ☑️ | Response message. Refer to https://dashboard.dana.id/api-docs/read/126#HTML-API-QueryPayment-ResponseCodeandMessage |
| **originalPartnerReferenceNo** | **String** |  | Original transaction identifier on partner system. Present if transaction found |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system. Present if transaction found |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **serviceCode** | **String** | ☑️ | Transaction type indicator is based on the service code of the original transaction request:<br> - IPG Cashier Pay - SNAP: 54<br> - QRIS CPM (Acquirer) - SNAP: 60<br> - QRIS MPM (Acquirer) - SNAP: 47<br> - Payment Gateway: 54<br>  |
| **latestTransactionStatus** | **String** | ☑️ | Category code for the status of the transaction. The values include:<br> - 00 = Success, the order has been successfully in final state and paid<br> - 01 = Initiated, the order has been created, but has not been paid<br> - 02 = Paying, the order is in process, not in final state, payment is success<br> - 05 = Cancelled, the order has been closed<br> - 07 = Not found, the order is not found<br>  |
| **transactionStatusDesc** | **String** |  | Description of transaction status |
| **originalResponseCode** | **String** |  | Original response code |
| **originalResponseMessage** | **String** |  | Original response message |
| **sessionId** | **String** |  | Session identifier |
| **requestID** | **String** |  | Transaction request identifier |
| **transAmount** | [**Money**](Money.md) |  | Trans amount. Present if transaction found. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **amount** | [**Money**](Money.md) |  | Amount. Present if transaction found. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **feeAmount** | [**Money**](Money.md) |  | Fee amount. Present if transaction found. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **paidTime** | **String** |  | Transaction paid time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time). Present if transaction is paid |
| **title** | **String** |  | Brief description. Present if transaction found |
| **additionalInfo** | [**QueryPaymentResponseAdditionalInfo**](QueryPaymentResponseAdditionalInfo.md) |  | Additional information |

[[Back to README]](../../../../README.md)
