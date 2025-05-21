# ApplyTokenResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Refer to response code list:&lt;br&gt; * 2007400 - Successful&lt;br&gt; * 4007400 - Bad Request - Retry request with proper parameter&lt;br&gt; * 4007401 - Invalid Field Format - Retry request with proper parameter&lt;br&gt; * 4007402 - Invalid Mandatory Field - Retry request with proper parameter&lt;br&gt; * 4017400 - Unauthorized. [reason] - Retry request with proper parameter&lt;br&gt; * 4297400 - Too Many Requests - Retry request periodically by sending same request payload&lt;br&gt; * 5007400 - General Error - Retry request periodically&lt;br&gt; * 5007401 - Internal Server Error - Retry request periodically by sending same request payload&lt;br&gt;  | [default to null] |
| **responseMessage** | **String** | Refer to response code list | [default to null] |
| **tokenType** | **String** | Token type | [optional] [default to null] |
| **accessToken** | **String** | Access token that can be used as user authorization | [default to null] |
| **accessTokenExpiryTime** | **String** | Access token expiry time | [optional] [default to null] |
| **refreshToken** | **String** | Token that can be used to refresh the accessToken when it expires | [optional] [default to null] |
| **refreshTokenExpiryTime** | **String** | Refresh token expiry time | [optional] [default to null] |
| **additionalInfo** | [**ApplyTokenResponseAdditionalInfo**](ApplyTokenResponseAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

