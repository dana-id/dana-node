# RefundOrderRequestAdditionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **payoutAccountNo** | **String** |  | Additional information of payout account number. This param need to be filled if want to refund to specific payout account not that specified by DANA |
| **refundAppliedTime** | **String** |  | Additional information of refund applied time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **actorType** | **String** |  | Additional information of actor type. The enums:<br> * USER - User<br> * MERCHANT - Merchant<br> * MERCHANT_OPERATOR - Merchant operator<br> * BACK_OFFICE - Back office<br> * SYSTEM - System<br>  |
| **returnChargeToPayer** | **String** |  | Additional information of return charge to payer |
| **destination** | **String** |  | Additional information of destination |
| **envInfo** | [**EnvInfo**](EnvInfo.md) |  | Additional information of environment |
| **auditInfo** | [**AuditInfo**](AuditInfo.md) |  | Additional information of audit |
| **actorContext** | [**ActorContext**](ActorContext.md) |  | Additional information of actor context |
| **refundOptionBill** | [**List**](RefundOptionBill.md) |  | Additional information of refund option bill |
| **extendInfo** | **String** |  | Additional information of extend |
| **asyncRefund** | **String** |  | Additional information of async refund to determine the process of refund whether sync or async. The values is true/false |

[[Back to README]](../../../../README.md)
