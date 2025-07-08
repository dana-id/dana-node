# ApplyTokenRefreshTokenRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **additionalInfo** | [**Map**](AnyType.md) |  | Additional information |
| **grantType** | **String** | ☑️ | Apply token request type. The value is REFRESH_TOKEN |
| **authCode** | **String** |  | Authorization code. Please refer to https://dashboard.dana.id/api-docs/read/125. Required if grantType is AUTHORIZATION_CODE |
| **refreshToken** | **String** | ☑️ | This token is used for refresh session if existing token has been expired |

[[Back to README]](../../../../README.md)
