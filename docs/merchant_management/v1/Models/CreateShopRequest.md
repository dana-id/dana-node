# CreateShopRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **merchantId** | **String** | ☑️ | Merchant id |
| **parentDivisionId** | **String** |  | Parent division ID. Required when shopParentType is DIVISION or EXTERNAL_DIVISION |
| **shopParentType** | **String** | ☑️ | Parent type for the shop |
| **mainName** | **String** | ☑️ | Shop name |
| **shopAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **shopDesc** | **String** |  | Shop description |
| **externalShopId** | **String** | ☑️ | External shop identifier |
| **logoUrlMap** | **Map** |  | Logo images encoded in base64. Keys can be LOGO, PC_LOGO, MOBILE_LOGO. Images must be PNG format. |
| **mccCodes** | **List** |  | MCC codes |
| **sizeType** | **String** | ☑️ | Size type of the shop |
| **ln** | **String** |  | Longitude |
| **lat** | **String** |  | Latitude |
| **taxNo** | **String** |  | Tax number (NPWP). Must be 15 digits |
| **brandName** | **String** |  | Legal name/tax name |
| **taxAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **loyalty** | **String** |  | Flag for loyalty category |
| **apiVersion** | **String** |  | API version flag. Use > 2 for new attributes |
| **businessEntity** | **String** |  | Business entity type. Required if apiVersion > 2 |
| **businessDocs** | [**List**](BusinessDocs.md) |  | Business documents. Required if apiVersion > 2 |
| **ownerName** | [**UserName**](UserName.md) |  |  |
| **ownerIdType** | **String** |  | Owner ID type. Required if apiVersion > 2 |
| **ownerIdNo** | **String** |  | Owner ID number. Required if apiVersion > 2 |
| **ownerAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **ownerPhoneNumber** | [**MobileNoInfo**](MobileNoInfo.md) |  |  |
| **shopOwning** | **String** |  | Shop ownership type. Required if apiVersion > 2 |
| **deviceNumber** | **String** |  | Device number. Required if apiVersion > 2 |
| **posNumber** | **String** |  | POS number. Required if apiVersion > 2 |
| **directorPics** | [**List**](PicInfo.md) |  | Director PICs. Required if apiVersion > 2 |
| **nonDirectorPics** | [**List**](PicInfo.md) |  | Non-director PICs. Required if apiVersion > 2 |
| **shopBizType** | **String** |  | Shop business type |
| **extInfo** | [**Map**](AnyType.md) |  | Extended information |

[[Back to README]](../../../../README.md)
