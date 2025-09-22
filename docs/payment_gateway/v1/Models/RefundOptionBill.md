# RefundOptionBill
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **payMethod** | **String** |  | Payment method name. The enums:<br>   * BALANCE - Payment method with balance<br>   * COUPON - Payment method with coupon<br>   * NET_BANKING - Payment method with internet banking<br>   * CREDIT_CARD - Payment method with credit card<br>   * DEBIT_CARD - Payment method with debit card<br>   * VIRTUAL_ACCOUNT - Payment method with virtual account<br>   * OTC - Payment method with OTC<br>   * DIRECT_DEBIT_CREDIT_CARD - Payment method with direct debit of credit card<br>   * DIRECT_DEBIT_DEBIT_CARD - Payment method with direct debit of debit card<br>   * ONLINE_CREDIT - Payment method with online Credit<br>   * LOAN_CREDIT - Payment method with DANA Cicil<br>   * NETWORK_PAY - Payment method with e-wallet<br>   * CARD - Payment method with card<br>  |
| **transAmount** | [**Money**](Money.md) |  | Trans amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |

[[Back to README]](../../../../README.md)
