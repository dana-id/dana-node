# ApplyTokenResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Response code. Refer to https://dashboard.dana.id/api-docs/read/110#HTML-ApplyToken-ResponseCodeandMessage |
| **responseMessage** | **String** | ☑️ | Response message. Refer to https://dashboard.dana.id/api-docs/read/110#HTML-ApplyToken-ResponseCodeandMessage |
| **tokenType** | **String** |  | Token type. Present if successfully processed |
| **accessToken** | **String** | ☑️ | This token is called Customer Token that will be used as a parameter on header in other API “Authorization-Customer”. Present if successfully processed |
| **accessTokenExpiryTime** | **String** |  | Expiry time for access token was given to user, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time). Present if successfully processed |
| **refreshToken** | **String** |  | This token is used for refresh session if existing token has been expired. Present if successfully processed |
| **refreshTokenExpiryTime** | **String** |  | Expiry time for refresh token was given to user, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time). Present if successfully processed |
| **additionalInfo** | [**ApplyTokenResponseAdditionalInfo**](ApplyTokenResponseAdditionalInfo.md) |  | Additional information |

[[Back to README]](../../../../README.md)
