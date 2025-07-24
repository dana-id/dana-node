# UpdateShopRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **shopId** | **String** | ☑️ | Shop identifier. Length depends on shopIdType - INNER_ID (21 max), EXTERNAL_ID (64 max) |
| **merchantId** | **String** | ☑️ | Merchant identifier |
| **shopIdType** | **String** | ☑️ | Shop identifier type |
| **mainName** | **String** |  | Shop name |
| **shopAddress** | [**AddressInfo**](AddressInfo.md) | ☑️ |  |
| **shopDesc** | **String** |  | Shop description |
| **newExternalShopId** | **String** |  | New external shop identifier |
| **mccCodes** | **List** |  | Merchant category code |
| **logoUrlMap** | **Map** |  | Logo URL map with base64 encoded images. Keys can be LOGO, PC_LOGO, MOBILE_LOGO |
| **extInfo** | [**Map**](AnyType.md) |  | Extend information |
| **sizeType** | **String** |  | Size type |
| **ln** | **String** |  | Longitude of shop's location |
| **lat** | **String** |  | Latitude of shop's location |
| **loyalty** | **String** |  | Flag for loyalty category |
| **ownerAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **ownerName** | [**UserName**](UserName.md) |  |  |
| **ownerPhoneNumber** | [**MobileNoInfo**](MobileNoInfo.md) |  |  |
| **ownerIdType** | **String** |  | Owner identifier type |
| **ownerIdNo** | **String** |  | Owner identifier number. Length depends on ownerIdType - KTP (16), SIM (12-14), Passport (8), NIB (>=13), SIUP (free text) |
| **deviceNumber** | **String** |  | Device number |
| **posNumber** | **String** |  | POS number |
| **apiVersion** | **String** |  | API version flag. Use > 2 for new attributes |
| **businessEntity** | **String** |  | Business entity type |
| **shopOwning** | **String** |  | Shop owning information |
| **shopBizType** | **String** |  | Shop business type |
| **businessDocs** | [**List**](BusinessDocs.md) |  | Business documents. \"individu\" entity can only use KTP and SIM. Other entities can use SIUP and NIB |
| **businessEndDate** | **String** |  | Business end date, in format YYYY-MM-dd |
| **taxNo** | **String** |  | Tax number (NPWP). Must be 15 digits |
| **taxAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **brandName** | **String** |  | Brand name on legal name or tax name |
| **directorPics** | [**List**](PicInfo.md) |  | Director as a PIC of shop |
| **nonDirectorPics** | [**List**](PicInfo.md) |  | Non director which become an PIC of shop |

[[Back to README]](../../../../README.md)
