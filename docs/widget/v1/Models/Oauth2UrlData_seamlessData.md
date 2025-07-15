# Oauth2UrlData_seamlessData
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **bizScenario** | **String** |  | User’s bizScenario |
| **mobileNumber** | **String** |  | User's phone number. If this field is filled in, the user must log in with the number that has been included |
| **verifiedTime** | **String** |  | Value which states that the mobile number that has been included in seamlessData has verified ownership and does not require OTP verification by the provider, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **externalUid** | **String** |  | User identifier on partner application |
| **deviceId** | **String** |  | User's device identifier |
| **skipRegisterConsult** | **Boolean** |  | Identifier to differentiate seamless registration flow. The possible values are true or false |

[[Back to README]](../../../../README.md)
