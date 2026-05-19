# MerchantAccountInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **accountNo** | **String** |  | Merchant account number |
| **status** | **String** |  | Merchant account status |
| **debitFreezeStatus** | **String** |  | Debit freeze status (merchant cannot accept money from DANA when frozen/closed) |
| **creditFreezeStatus** | **String** |  | Credit freeze status (merchant cannot disburse when frozen/closed) |
| **totalAmount** | **String** |  | Total amount as JSON string with `amount` and `currency` fields  |
| **availableAmount** | **String** |  | Available amount as JSON string with `amount` and `currency` fields  |
| **currency** | **String** |  | Currency code (ISO) |
| **accountType** | **String** |  | Account type |

[[Back to README]](../../../../README.md)
