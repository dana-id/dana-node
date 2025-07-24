# BalanceInquiryResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list |
| **responseMessage** | **String** | ☑️ | Refer to response code list |
| **referenceNo** | **String** |  | Transaction identifier on DANA system |
| **partnerReferenceNo** | **String** |  | Unique transaction identifier on partner system which assigned to each transaction<br> Notes:<br> If the partner receives a timeout or an unexpected response from DANA and partner expects to perform retry request to DANA, please use the partnerReferenceNo that is the same as the one used in the transaction request process before  |
| **name** | **String** |  | Customer account name |
| **accountInfos** | [**List**](AccountInfo.md) |  | Account information |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
