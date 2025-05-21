# QueryPaymentResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Refer to response code list:&lt;br&gt; * 2005500 - Successful&lt;br&gt; * 4005500 - Bad Request - Retry request with proper parameter&lt;br&gt; * 4005501 - Invalid Field Format - Retry request with proper parameter&lt;br&gt; * 4005502 - Invalid Mandatory Field - Retry request with proper parameter&lt;br&gt; * 4015500 - Unauthorized. [reason] - Retry request with proper parameter&lt;br&gt; * 4015501 - Invalid Token (B2B) - Retry request with proper parameter&lt;br&gt; * 4045501 - Transaction Not Found - Try to create a new order&lt;br&gt; * 4295500 - Too Many Requests - Retry request periodically&lt;br&gt; * 5005500 - General Error - Retry request periodically&lt;br&gt; * 5005501 - Internal Server Error - Retry request periodically&lt;br&gt;  | [default to null] |
| **responseMessage** | **String** | Refer to response code list  | [default to null] |
| **originalPartnerReferenceNo** | **String** | Original transaction identifier on partner system | [optional] [default to null] |
| **originalReferenceNo** | **String** | Original transaction identifier on DANA system | [optional] [default to null] |
| **originalExternalId** | **String** | Original external identifier on header message | [optional] [default to null] |
| **serviceCode** | **String** | Transaction type indicator:&lt;br&gt; - IPG Cashier Pay - SNAP: 54&lt;br&gt; - QRIS CPM (Acquirer) - SNAP: 60&lt;br&gt; - QRIS MPM (Acquirer) - SNAP: 47&lt;br&gt; - Payment Gateway: 54&lt;br&gt;  | [default to 54] |
| **latestTransactionStatus** | **String** | Status code:&lt;br&gt; - 00 &#x3D; Success. Order has been successfully in final state and paid&lt;br&gt; - 01 &#x3D; Initiated. Waiting for payment. Mark Payment as Pending&lt;br&gt; - 02 &#x3D; Paying. The order is in process, not in final state, payment is success. Mark Payment as Success&lt;br&gt; - 05 &#x3D; Cancelled. Order has been cancelled. Mark Payment as Failed&lt;br&gt; - 07 &#x3D; Not found. Order is not found. Mark Payment as Failed&lt;br&gt;  | [default to null] |
| **transactionStatusDesc** | **String** | Description of transaction status | [optional] [default to null] |
| **originalResponseCode** | **String** | Original response code | [optional] [default to null] |
| **originalResponseMessage** | **String** | Original response message | [optional] [default to null] |
| **sessionId** | **String** | Session identifier | [optional] [default to null] |
| **requestID** | **String** | Transaction request identifier | [optional] [default to null] |
| **transAmount** | [**Money**](Money.md) |  | [optional] [default to null] |
| **amount** | [**Money**](Money.md) |  | [optional] [default to null] |
| **feeAmount** | [**Money**](Money.md) |  | [optional] [default to null] |
| **paidTime** | **String** | Payment timestamp in format YYYY-MM-DDTHH:mm:ss+07:00 (Jakarta time) | [optional] [default to null] |
| **title** | **String** | Brief description of transaction | [optional] [default to null] |
| **additionalInfo** | [**QueryPaymentResponseAdditionalInfo**](QueryPaymentResponseAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

