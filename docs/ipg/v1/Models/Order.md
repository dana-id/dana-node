# Order
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **buyer** | [**Buyer**](Buyer.md) |  |  |
| **seller** | [**Seller**](Seller.md) |  |  |
| **orderTitle** | **String** | ☑️ | Additional information of order title |
| **merchantTransType** | **String** |  | Additional information of merchant transaction type |
| **orderMemo** | **String** |  | Additional information of order memo |
| **createdTime** | **String** |  | Additional information of created time, in format YYYY-MM-DDTHH:mm:ss+07:00. Time must be in GMT+7 (Jakarta time) |
| **goods** | [**List**](Goods.md) |  |  |
| **shippingInfo** | [**List**](ShippingInfo.md) |  | Additional information of shipping |
| **internationalOrderInfo** | [**InternationalOrderInfo**](InternationalOrderInfo.md) |  | Additional information of international order. Only use for Mini Program service |
| **extendInfo** | **String** |  | Additional information of extend |

[[Back to README]](../../../../README.md)
