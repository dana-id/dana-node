# UpdateDivisionRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **merchantId** | **String** | ☑️ | Merchant identifier |
| **divisionId** | **String** |  | Division identifier. Required when divisionIdType is INNER_ID |
| **divisionName** | **String** | ☑️ | Division name |
| **divisionAddress** | [**AddressInfo**](AddressInfo.md) | ☑️ |  |
| **divisionDescription** | **String** |  | Division description |
| **divisionType** | **String** | ☑️ | Division type |
| **divisionIdType** | **String** | ☑️ | Division identifier type |
| **externalDivisionId** | **String** |  | External division identifier. Required when divisionIdType is EXTERNAL_ID |
| **newExternalDivisionId** | **String** | ☑️ | New external division identifier |
| **logoUrlMap** | **Map** |  | Logo URL map with base64 encoded images. Keys can be LOGO, PC_LOGO, MOBILE_LOGO |
| **mccCodes** | **List** | ☑️ | Merchant category codes |
| **extInfo** | [**Map**](AnyType.md) | ☑️ | Extended information |
| **apiVersion** | **String** |  | API version flag. Use > 2 for new attributes |
| **businessDocs** | [**List**](BusinessDocs.md) |  | Business documents. Required when apiVersion > 2. \"individu\" entity can only use KTP and SIM. Other entities can use SIUP and NIB |
| **businessEntity** | **String** |  | Business entity type. Required when apiVersion > 2 |
| **businessEndDate** | **String** |  | Business end date, in format YYYY-MM-DD. Required when apiVersion > 2 |
| **ownerName** | [**UserName**](UserName.md) |  |  |
| **ownerPhoneNumber** | [**MobileNoInfo**](MobileNoInfo.md) |  |  |
| **ownerIdType** | **String** |  | Owner identifier type. Required when apiVersion > 2 |
| **ownerIdNo** | **String** |  | Owner identifier number. Required when apiVersion > 2. Length depends on ownerIdType - KTP (16), SIM (12-14), Passport (8), NIB (>=13), SIUP (free text) |
| **ownerAddress** | [**AddressInfo**](AddressInfo.md) |  |  |
| **directorPics** | [**List**](PicInfo.md) |  | Director as a PIC of sub merchant. Required when apiVersion > 2 |
| **nonDirectorPics** | [**List**](PicInfo.md) |  | Non director which become a PIC of sub merchant. Required when apiVersion > 2 |
| **sizeType** | **String** |  | Size type. Required when apiVersion > 2 |
| **pgDivisionFlag** | **String** |  | Flag if division is type PG |

[[Back to README]](../../../../README.md)
