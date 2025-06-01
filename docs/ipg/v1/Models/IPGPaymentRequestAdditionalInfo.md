# IPGPaymentRequestAdditionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **supportDeepLinkCheckoutUrl** | **String** |  | Additional information of deeplink checkout URL. For Mini Program, DANA will treat as false |
| **phoneNumber** | **String** |  | Additional information of user's phone number |
| **publicUserId** | **String** |  | Additional information of public user's identifier |
| **productCode** | **String** | ☑️ | Additional information of product code |
| **serviceInfo** | [**ServiceInfo**](ServiceInfo.md) |  |  |
| **order** | [**Order**](Order.md) | ☑️ |  |
| **mcc** | **String** | ☑️ | Additional information of merchant category code. This parameter is used to identify the type of business in which a merchant is engaged. |
| **envInfo** | [**EnvInfo**](EnvInfo.md) | ☑️ |  |
| **extendInfo** | **String** |  | Additional information of extend |

[[Back to README]](../../../../README.md)
