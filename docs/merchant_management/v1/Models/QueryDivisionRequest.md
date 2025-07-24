# QueryDivisionRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **merchantId** | **String** |  | Merchant identifier. Required when divisionIdType is EXTERNAL_ID |
| **divisionId** | **String** | ☑️ | Division identifier or external identifier. Length depends on divisionIdType - INNER_ID (21 max), EXTERNAL_ID (64 max) |
| **divisionIdType** | **String** | ☑️ | Division identifier type |

[[Back to README]](../../../../README.md)
