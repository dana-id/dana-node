# PayOptionDetail
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **payMethod** | **String** | ☑️ | Payment method that used to payment. The enums:<br>   * BALANCE - Payment method with balance<br>   * COUPON - Payment method with coupon<br>   * NET_BANKING - Payment method with internet banking<br>   * CREDIT_CARD - Payment method with credit card<br>   * DEBIT_CARD - Payment method with debit card<br>   * VIRTUAL_ACCOUNT - Payment method with virtual account<br>   * OTC - Payment method with OTC<br>   * DIRECT_DEBIT_CREDIT_CARD - Payment method with direct debit of credit card<br>   * DIRECT_DEBIT_DEBIT_CARD - Payment method with direct debit of debit card<br>   * ONLINE_CREDIT - Payment method with online Credit<br>   * LOAN_CREDIT - Payment method with DANA Cicil<br>   * NETWORK_PAY - Payment method with e-wallet<br>   * CARD - Payment method with card<br>  |
| **payOption** | **String** | ☑️ | Payment option that available to used to payment, depends on the payment method. The enums:<br>   * NETWORK_PAY_PG_SPAY - Payment method with ShopeePay e-wallet<br>   * NETWORK_PAY_PG_OVO - Payment method with OVO e-wallet<br>   * NETWORK_PAY_PG_GOPAY - Payment method with GoPay e-wallet<br>   * NETWORK_PAY_PG_LINKAJA - Payment method with LinkAja e-wallet<br>   * NETWORK_PAY_PG_CARD - Payment method with Card<br>   * NETWORK_PAY_PG_QRIS - Payment method with QRIS<br>   * NETWORK_PAY_PC_INDOMARET - Payment method with Indomaret<br>   * VIRTUAL_ACCOUNT_BCA - Payment method with BCA virtual account<br>   * VIRTUAL_ACCOUNT_BNI - Payment method with BNI virtual account<br>   * VIRTUAL_ACCOUNT_MANDIRI - Payment method with Mandiri virtual account<br>   * VIRTUAL_ACCOUNT_BRI - Payment method with BRI virtual account<br>   * VIRTUAL_ACCOUNT_BTPN - Payment method with BTPN virtual account<br>   * VIRTUAL_ACCOUNT_CIMB - Payment method with CIMB virtual account<br>   * VIRTUAL_ACCOUNT_PERMATA - Payment method with Permata virtual account<br>   * VIRTUAL_ACCOUNT_PANI - Payment method with Panin virtual account<br>  |
| **transAmount** | [**Money**](Money.md) | ☑️ |  |
| **feeAmount** | [**Money**](Money.md) |  |  |
| **cardToken** | **String** |  | Token that used for payment with card |
| **merchantToken** | **String** |  | Merchant token used for this payment |
| **additionalInfo** | [**PayOptionAdditionalInfo**](PayOptionAdditionalInfo.md) |  |  |

[[Back to README]](../../../../README.md)
