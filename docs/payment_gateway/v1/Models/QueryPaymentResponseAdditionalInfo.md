# QueryPaymentResponseAdditionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **buyer** | [**Buyer**](Buyer.md) |  | Additional information of buyer |
| **seller** | [**Seller**](Seller.md) |  | Additional information of seller |
| **amountDetail** | [**AmountDetail**](AmountDetail.md) |  | Additional information of amount detail. Present if transaction found |
| **timeDetail** | [**TimeDetail**](TimeDetail.md) |  | Additional information of time detail. Present if transaction found |
| **goods** | [**List**](Goods.md) |  | Additional information of goods |
| **shippingInfo** | [**List**](ShippingInfo.md) |  | Additional information of shipping |
| **orderMemo** | **String** |  | Additional information of memo |
| **paymentViews** | [**List**](PaymentView.md) |  | Additional information of payment views. Present if transaction found |
| **extendInfo** | **String** |  | Additional information of extend |
| **statusDetail** | [**StatusDetail**](StatusDetail.md) |  | Additional information of status detail |
| **closeReason** | **String** |  | Additional information of close reason |
| **virtualAccountInfo** | [**VirtualAccountInfo**](VirtualAccountInfo.md) |  | Additional information of virtual account. Only use for Payment Gateway service |
| **merchantId** | **String** |  | Merchant identifier |

[[Back to README]](../../../../README.md)
