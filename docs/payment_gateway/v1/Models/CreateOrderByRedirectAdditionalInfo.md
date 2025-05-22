# CreateOrderByRedirectAdditionalInfo
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **mcc** | **String** | Additional information of merchant category code. This parameter is used to identify the type of business in which a merchant is engaged. Refer to Details of https://dashboard.dana.id/api-docs/read/197#OpenAPI-MerchantCategoryCode | [default to null] |
| **extendInfo** | **String** | Additional information of extend such as partner passthrough and risk information | [optional] [default to null] |
| **envInfo** | [**EnvInfo**](EnvInfo.md) | Additional information of environment info | [default to null] |
| **order** | [**OrderRedirectObject**](OrderRedirectObject.md) | Additional information of order | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

