# IPGPaymentResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Refer to response code list:&lt;br&gt; * 2005400 - Successful&lt;br&gt; * 4005400 - Bad Request - Retry request with proper parameter&lt;br&gt; * 4005401 - Invalid Field Format - Retry request with proper parameter&lt;br&gt; * 4005402 - Invalid Mandatory Field - Retry request with proper parameter&lt;br&gt; * 4015400 - Unauthorized. [reason] - Retry request with proper parameter&lt;br&gt; * 4035402 - Exceeds Transaction Amount Limit - Try to adjust the order amount&lt;br&gt; * 4035405 - Do Not Honor - Retry request with proper parameter or can contact DANA to check the user/account status&lt;br&gt; * 4035415 - Transaction Not Permitted - Retry request periodically or consult to DANA&lt;br&gt; * 4045408 - Invalid Merchant - Retry request with proper parameter&lt;br&gt; * 4045418 - Inconsistent Request - Retry with proper parameter&lt;br&gt; * 4295400 - Too Many Requests - Retry request periodically by sending same request payload&lt;br&gt; * 5005400 - General Error - Retry request periodically&lt;br&gt; * 5005401 - Internal Server Error - Retry request periodically by sending same request payload&lt;br&gt;  | [default to null] |
| **responseMessage** | **String** | Human readable response message | [default to null] |
| **referenceNo** | **String** | Transaction identifier on DANA system, returned when transaction is successfully processed | [optional] [default to null] |
| **partnerReferenceNo** | **String** | Transaction identifier on partner system which assigned to each transaction | [default to null] |
| **webRedirectUrl** | **String** | DANA checkout URL, returned when transaction is successfully processed | [optional] [default to null] |
| **additionalInfo** | [**Map**](AnyType.md) | Additional information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

