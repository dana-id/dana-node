# WidgetPaymentResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Refer to response code list:<br> * 2005400 - Successful<br> * 4005400 - Bad Request - Retry request with proper parameter<br> * 4005401 - Invalid Field Format - Retry request with proper parameter<br> * 4005402 - Invalid Mandatory Field - Retry request with proper parameter<br> * 4015400 - Unauthorized. [reason] - Retry request with proper parameter<br> * 4035402 - Exceeds Transaction Amount Limit - Try to adjust the order amount<br> * 4035405 - Do Not Honor - Retry request with proper parameter or can contact DANA to check the user/account status<br> * 4035415 - Transaction Not Permitted - Retry request periodically or consult to DANA<br> * 4045408 - Invalid Merchant - Retry request with proper parameter<br> * 4045418 - Inconsistent Request - Retry with proper parameter<br> * 4295400 - Too Many Requests - Retry request periodically by sending same request payload<br> * 5005400 - General Error - Retry request periodically<br> * 5005401 - Internal Server Error - Retry request periodically by sending same request payload<br>  |
| **responseMessage** | **String** | ☑️ | Human readable response message |
| **referenceNo** | **String** |  | Transaction identifier on DANA system, returned when transaction is successfully processed |
| **partnerReferenceNo** | **String** | ☑️ | Transaction identifier on partner system which assigned to each transaction |
| **webRedirectUrl** | **String** |  | DANA checkout URL, returned when transaction is successfully processed |
| **additionalInfo** | [**Map**](AnyType.md) |  | Additional information |

[[Back to README]](../../../../README.md)
