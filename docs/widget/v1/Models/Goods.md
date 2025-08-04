# Goods
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **String** | ☑️ | Goods name |
| **merchantGoodsId** | **String** | ☑️ | Goods identifier provided by merchant |
| **description** | **String** | ☑️ | Goods description |
| **category** | **String** | ☑️ | Goods category |
| **price** | [**Money**](Money.md) | ☑️ | Goods price. Contains two sub-fields:<br> 1. Value: Transaction amount, including the cents<br> 2. Currency: Currency code based on ISO<br>  |
| **unit** | **String** |  | Goods unit |
| **quantity** | **String** | ☑️ | Count of items |
| **merchantShippingId** | **String** |  | Shipment identifier provided by merchant |
| **snapshotUrl** | **String** |  | The URL of good's snapshot web page |
| **extendInfo** | **String** |  | Extend information |

[[Back to README]](../../../../README.md)
