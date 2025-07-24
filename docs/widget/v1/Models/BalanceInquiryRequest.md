# BalanceInquiryRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **partnerReferenceNo** | **String** |  | Unique transaction identifier on partner system which assigned to each transaction<br> Notes:<br> If the partner receives a timeout or an unexpected response from DANA and partner expects to perform retry request to DANA, please use the partnerReferenceNo that is the same as the one used in the transaction request process before  |
| **balanceTypes** | **List** |  | Information of balance types to specify which balance type expected to be returned. Will return all available balance type if this parameter empty |
| **additionalInfo** | [**BalanceInquiryRequest_additionalInfo**](BalanceInquiryRequest_additionalInfo.md) |  |  |

[[Back to README]](../../../../README.md)
