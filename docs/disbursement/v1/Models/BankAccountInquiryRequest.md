# BankAccountInquiryRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **partnerReferenceNo** | **String** |  | Unique transaction identifier on partner system which assigned to each transaction<br> Notes:<br> If the partner receives a timeout or an unexpected response from DANA and partner expects to perform retry request to DANA, please use the partnerReferenceNo that is the same as the one used in the transaction request process before  |
| **customerNumber** | **String** | ☑️ | Customer account number, in format 628xxx |
| **beneficiaryAccountNumber** | **String** | ☑️ | Beneficiary account number |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO  |
| **additionalInfo** | [**BankAccountInquiryRequest_additionalInfo**](BankAccountInquiryRequest_additionalInfo.md) | ☑️ |  |

[[Back to README]](../../../../README.md)
