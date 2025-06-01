# CreateOrderByApiAdditionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **mcc** | **String** | ☑️ | Additional information of merchant category code. This parameter is used to identify the type of business in which a merchant is engaged. Refer to Details of https://dashboard.dana.id/api-docs/read/197#OpenAPI-MerchantCategoryCode |
| **extendInfo** | **String** |  | Additional information of extend such as partner passthrough and risk information |
| **envInfo** | [**EnvInfo**](EnvInfo.md) | ☑️ | Additional information of environment info |
| **order** | [**OrderApiObject**](OrderApiObject.md) |  | Additional information of order |

[[Back to README]](../../../../README.md)
