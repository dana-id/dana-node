# DanaAccountInquiryResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list |
| **responseMessage** | **String** | ☑️ | Refer to response code list |
| **referenceNo** | **String** |  | Transaction identifier on DANA system |
| **partnerReferenceNo** | **String** |  | Unique transaction identifier on partner system which assigned to each transaction<br> Notes:<br> If the partner receives a timeout or an unexpected response from DANA and partner expects to perform retry request to DANA, please use the partnerReferenceNo that is the same as the one used in the transaction request process before  |
| **sessionId** | **String** |  | Session identifier |
| **customerNumber** | **String** |  | Customer account number, in format 628xxx |
| **customerName** | **String** | ☑️ | Customer account name |
| **customerMonthlyInLimit** | **String** |  | Limitation of transfer to DANA balance for customer per month |
| **minAmount** | [**Money**](Money.md) | ☑️ | Minimal amount. Contains two sub-fields:<br> 1. Value: Amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **maxAmount** | [**Money**](Money.md) | ☑️ | Maximal amount. Contains two sub-fields:<br> 1. Value: Amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **feeAmount** | [**Money**](Money.md) | ☑️ | Fee amount. Contains two sub-fields:<br> 1. Value: Amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **feeType** | **String** |  | Type of fee for each transfer to DANA transaction. Such as admin fee |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
