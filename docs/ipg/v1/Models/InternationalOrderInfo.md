# InternationalOrderInfo
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **originOrderAmount** | [**Money**](Money.md) | Origin order amount in the original currency. Contains value (amount including cents) and currency (code based on ISO) | [optional] [default to null] |
| **exchangeRate** | [**InternationalOrderInfo_exchangeRate**](InternationalOrderInfo_exchangeRate.md) |  | [optional] [default to null] |
| **totalAmount** | [**Money**](Money.md) | Total amount after conversion. Contains value (amount including cents) and currency (code based on ISO) | [optional] [default to null] |
| **paymentPromoInfo** | [**PaymentPromoInfo**](PaymentPromoInfo.md) | Define the detail of payment promo information, contains promotion that handled and set by merchant | [optional] [default to null] |
| **refundPromoInfo** | [**RefundPromoInfo**](RefundPromoInfo.md) | Define the detail of refund promo information | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

