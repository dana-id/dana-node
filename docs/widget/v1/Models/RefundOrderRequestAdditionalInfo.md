# RefundOrderRequestAdditionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **payoutAccountNo** | **String** |  | Additional information of payout account number. This param need to be filled if want to refund to specific payout account not that specified by DANA |
| **refundAppliedTime** | **String** |  | Additional information of refund applied time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **actorType** | **String** |  | Additional information of actor type, refer to ActorTypeEnum |
| **returnChargeToPayer** | **String** |  | Additional information of return charge to payer |
| **destination** | **String** |  | Additional information of destination |
| **envInfo** | [**Object**](.md) | ☑️ | Additional information of environment |
| **auditInfo** | [**Object**](.md) |  | Additional information of audit |
| **actorContext** | [**Object**](.md) |  | Additional information of actor context |
| **refundOptionBill** | **List** |  | Additional information of refund option bill |
| **extendInfo** | **String** |  | Additional information of extend |
| **asyncRefund** | **String** |  | Additional information of async refund to determine the process of refund whether sync or async. The values is true/false |

[[Back to README]](../../../../README.md)
