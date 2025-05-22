# RefundOrderRequestAdditionalInfo
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **payoutAccountNo** | **String** | Additional information of payout account number. This param need to be filled if want to refund to specific payout account not that specified by DANA | [optional] [default to null] |
| **refundAppliedTime** | **String** | Additional information of refund applied time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) | [optional] [default to null] |
| **actorType** | **String** | Additional information of actor type. The enums:<br> * USER - User<br> * MERCHANT - Merchant<br * MERCHANT_OPERATOR - Merchant operator<br> * BACK_OFFICE - Back office<br> * SYSTEM - System<br>  | [optional] [default to null] |
| **returnChargeToPayer** | **String** | Additional information of return charge to payer | [optional] [default to null] |
| **destination** | **String** | Additional information of destination | [optional] [default to null] |
| **envInfo** | [**EnvInfo**](EnvInfo.md) | Additional information of environment | [optional] [default to null] |
| **auditInfo** | [**AuditInfo**](AuditInfo.md) | Additional information of audit | [optional] [default to null] |
| **actorContext** | [**ActorContext**](ActorContext.md) | Additional information of actor context | [optional] [default to null] |
| **refundOptionBill** | [**List**](RefundOptionBill.md) | Additional information of refund option bill | [optional] [default to null] |
| **extendInfo** | **String** | Additional information of extend | [optional] [default to null] |
| **asyncRefund** | **String** | Additional information of async refund to determine the process of refund whether sync or async. The values is true/false | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

