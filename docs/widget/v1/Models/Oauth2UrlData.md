# Oauth2UrlData
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **externalId** | **String** | ☑️ | Identifier from merchant |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **seamlessData** | [**Oauth2UrlData_seamlessData**](Oauth2UrlData_seamlessData.md) |  |  |
| **scopes** | **List** |  | The scopes of the authorization |
| **redirectUrl** | **String** | ☑️ | When user authorization is success, the user will be redirected to this URL |
| **state** | **String** |  | Random string for CSRF protection purposes |
| **lang** | **String** |  | Service language code. ISO 639-1 |
| **allowRegistration** | **String** |  | If value equals true, provider may enable registration process during binding. Default true |

[[Back to README]](../../../../README.md)
