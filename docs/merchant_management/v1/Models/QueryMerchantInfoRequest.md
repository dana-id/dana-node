# QueryMerchantInfoRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **roleId** | **String** | ☑️ | Login identifier value (format depends on `loginType`, e.g. `{countryCode}-{mobileNo}` when `loginType` is `MOBILE_NO`) |
| **loginType** | **String** | ☑️ | Login identifier type used with `roleId` |
| **isQueryAccount** | **Boolean** |  | When true, include merchant account list in the response |

[[Back to README]](../../../../README.md)
