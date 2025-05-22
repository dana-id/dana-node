# PayOptionInfo
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **payMethod** | **String** | Payment method name. The enums:<br>   * BALANCE - Payment method with balance<br>   * COUPON - Payment method with coupon<br>   * NET_BANKING - Payment method with internet banking<br>   * CREDIT_CARD - Payment method with credit card<br>   * DEBIT_CARD - Payment method with debit card<br>   * VIRTUAL_ACCOUNT - Payment method with virtual account<br>   * OTC - Payment method with OTC<br>   * DIRECT_DEBIT_CREDIT_CARD - Payment method with direct debit of credit card<br>   * DIRECT_DEBIT_DEBIT_CARD - Payment method with direct debit of debit card<br>   * ONLINE_CREDIT - Payment method with online Credit<br>   * LOAN_CREDIT - Payment method with DANA Cicil<br>  | [default to null] |
| **payOption** | **String** | Payment option which shows the provider of this payment. The enums:<br>   * NETWORK_PAY_PG_SPAY - Payment method with ShopeePay e-wallet<br>   * NETWORK_PAY_PG_OVO - Payment method with OVO e-wallet<br>   * NETWORK_PAY_PG_GOPAY - Payment method with GoPay e-wallet<br>   * NETWORK_PAY_PG_LINKAJA - Payment method with LinkAja e-wallet<br>   * NETWORK_PAY_PG_CARD - Payment method with Card<br>   * VIRTUAL_ACCOUNT_BCA - Payment method with BCA virtual account<br>   * VIRTUAL_ACCOUNT_BNI - Payment method with BNI virtual account<br>   * VIRTUAL_ACCOUNT_MANDIRI - Payment method with Mandiri virtual account<br>   * VIRTUAL_ACCOUNT_BRI - Payment method with BRI virtual account<br>   * VIRTUAL_ACCOUNT_BTPN - Payment method with BTPN virtual account<br>   * VIRTUAL_ACCOUNT_CIMB - Payment method with CIMB virtual account<br>   * VIRTUAL_ACCOUNT_PERMATA - Payment method with Permata virtual account<br>  | [optional] [default to null] |
| **payAmount** | [**Money**](Money.md) | Pay amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  | [default to null] |
| **transAmount** | [**Money**](Money.md) | Trans amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  | [optional] [default to null] |
| **chargeAmount** | [**Money**](Money.md) | Charge amount. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  | [optional] [default to null] |
| **payOptionBillExtendInfo** | **String** | Extend information of pay option bill | [optional] [default to null] |
| **extendInfo** | **String** | Extend information | [optional] [default to null] |
| **paymentCode** | **String** | Payment code | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

