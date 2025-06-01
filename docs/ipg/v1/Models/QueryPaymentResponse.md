# QueryPaymentResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list:<br> * 2005500 - Successful<br> * 4005500 - Bad Request - Retry request with proper parameter<br> * 4005501 - Invalid Field Format - Retry request with proper parameter<br> * 4005502 - Invalid Mandatory Field - Retry request with proper parameter<br> * 4015500 - Unauthorized. [reason] - Retry request with proper parameter<br> * 4015501 - Invalid Token (B2B) - Retry request with proper parameter<br> * 4045501 - Transaction Not Found - Try to create a new order<br> * 4295500 - Too Many Requests - Retry request periodically<br> * 5005500 - General Error - Retry request periodically<br> * 5005501 - Internal Server Error - Retry request periodically<br>  |
| **responseMessage** | **String** | ☑️ | Refer to response code list  |
| **originalPartnerReferenceNo** | **String** |  | Original transaction identifier on partner system |
| **originalReferenceNo** | **String** |  | Original transaction identifier on DANA system |
| **originalExternalId** | **String** |  | Original external identifier on header message |
| **serviceCode** | **String** | ☑️ | Transaction type indicator:<br> - IPG Cashier Pay - SNAP: 54<br> - QRIS CPM (Acquirer) - SNAP: 60<br> - QRIS MPM (Acquirer) - SNAP: 47<br> - Payment Gateway: 54<br>  |
| **latestTransactionStatus** | **String** | ☑️ | Status code:<br> - 00 = Success. Order has been successfully in final state and paid<br> - 01 = Initiated. Waiting for payment. Mark Payment as Pending<br> - 02 = Paying. The order is in process, not in final state, payment is success. Mark Payment as Success<br> - 05 = Cancelled. Order has been cancelled. Mark Payment as Failed<br> - 07 = Not found. Order is not found. Mark Payment as Failed<br>  |
| **transactionStatusDesc** | **String** |  | Description of transaction status |
| **originalResponseCode** | **String** |  | Original response code |
| **originalResponseMessage** | **String** |  | Original response message |
| **sessionId** | **String** |  | Session identifier |
| **requestID** | **String** |  | Transaction request identifier |
| **transAmount** | [**Money**](Money.md) |  |  |
| **amount** | [**Money**](Money.md) |  |  |
| **feeAmount** | [**Money**](Money.md) |  |  |
| **paidTime** | **String** |  | Payment timestamp in format YYYY-MM-DDTHH:mm:ss+07:00 (Jakarta time) |
| **title** | **String** |  | Brief description of transaction |
| **additionalInfo** | [**QueryPaymentResponseAdditionalInfo**](QueryPaymentResponseAdditionalInfo.md) |  |  |

[[Back to README]](../../../../README.md)
