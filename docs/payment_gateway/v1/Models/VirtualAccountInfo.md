# VirtualAccountInfo
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **virtualAccountCode** | **String** | Virtual account code. Present if successfully processed and payment method is VIRTUAL_ACCOUNT | [optional] [default to null] |
| **virtualAccountExpiryTime** | **String** | Expiry time of virtual account, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time). Present if successfully processed and payment method is VIRTUAL_ACCOUNT | [optional] [default to null] |
| **signature** | **String** | Signature of virtual account. Present if successfully processed and payment method is VIRTUAL_ACCOUNT | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

