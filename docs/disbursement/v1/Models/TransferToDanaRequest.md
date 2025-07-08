# TransferToDanaRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **partnerReferenceNo** | **String** | ☑️ | Unique transaction identifier on partner system which assigned to each transaction<br> Notes:<br> If the partner receives a timeout or an unexpected response from DANA and partner expects to perform retry request to DANA, please use the partnerReferenceNo that is the same as the one used in the transaction request process before  |
| **customerNumber** | **String** |  | Customer account number, in format 628xxx |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **feeAmount** | [**Money**](Money.md) | ☑️ | Fee amount. Contains two sub-fields:<br> 1. Value: Amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **transactionDate** | **String** |  | Transaction date, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **sessionId** | **String** |  | Session identifier |
| **categoryId** | **BigDecimal** |  | Category identifier |
| **notes** | **String** |  | Transaction notes |
| **additionalInfo** | [**TransferToDanaRequest_additionalInfo**](TransferToDanaRequest_additionalInfo.md) | ☑️ |  |

[[Back to README]](../../../../README.md)
