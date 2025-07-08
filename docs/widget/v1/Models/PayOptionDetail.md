# PayOptionDetail
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **payMethod** | **String** | ☑️ | Payment Method, e.g. CREDIT_CARD |
| **payOption** | **String** | ☑️ | Payment option which shows the provider of this payment e.g. CREDIT_CARD_VISA |
| **transAmount** | [**Money**](Money.md) |  | Trans amount. Contains value and currency |
| **feeAmount** | [**Money**](Money.md) |  | Fee amount. Contains value and currency |
| **cardToken** | **String** |  | Card token used for this payment |
| **merchantToken** | **String** |  | Merchant token used for this payment |
| **additionalInfo** | [**PayOptionDetailAdditionalInfo**](PayOptionDetailAdditionalInfo.md) |  |  |

[[Back to README]](../../../../README.md)
