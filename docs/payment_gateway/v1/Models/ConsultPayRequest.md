# ConsultPayRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **merchantId** | **String** | ☑️ | Merchant identifier that is unique per each merchant |
| **amount** | [**Money**](Money.md) | ☑️ | Amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **additionalInfo** | [**ConsultPayRequestAdditionalInfo**](ConsultPayRequestAdditionalInfo.md) | ☑️ | Additional information |
| **externalStoreId** | **String** |  | Store identifier to indicate to which store this payment belongs to. Need to be provided to show QRIS payment method. |

[[Back to README]](../../../../README.md)
