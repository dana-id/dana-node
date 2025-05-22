# ApplyTokenResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **responseCode** | **String** | Refer to response code list:<br> * 2007400 - Successful<br> * 4007400 - Bad Request - Retry request with proper parameter<br> * 4007401 - Invalid Field Format - Retry request with proper parameter<br> * 4007402 - Invalid Mandatory Field - Retry request with proper parameter<br> * 4017400 - Unauthorized. [reason] - Retry request with proper parameter<br> * 4297400 - Too Many Requests - Retry request periodically by sending same request payload<br> * 5007400 - General Error - Retry request periodically<br> * 5007401 - Internal Server Error - Retry request periodically by sending same request payload<br>  | [default to null] |
| **responseMessage** | **String** | Refer to response code list | [default to null] |
| **tokenType** | **String** | Token type | [optional] [default to null] |
| **accessToken** | **String** | Access token that can be used as user authorization | [default to null] |
| **accessTokenExpiryTime** | **String** | Access token expiry time | [optional] [default to null] |
| **refreshToken** | **String** | Token that can be used to refresh the accessToken when it expires | [optional] [default to null] |
| **refreshTokenExpiryTime** | **String** | Refresh token expiry time | [optional] [default to null] |
| **additionalInfo** | [**ApplyTokenResponseAdditionalInfo**](ApplyTokenResponseAdditionalInfo.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

