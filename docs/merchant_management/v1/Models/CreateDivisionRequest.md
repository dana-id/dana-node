# CreateDivisionRequest
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **apiVersion** | **String** | ☑️ | API Version. As per the respective API reference. Must be > 2 |
| **merchantId** | **String** | ☑️ | Merchant identifier |
| **parentDivisionId** | **String** |  | Parent division identifier. Required when parentRoleType is DIVISION or EXTERNAL_DIVISION. Length depends on parentRoleType - DIVISION (21 max), EXTERNAL_DIVISION (64 max) |
| **parentRoleType** | **String** | ☑️ | Type of parent role |
| **divisionName** | **String** | ☑️ | Division name |
| **divisionAddress** | [**AddressInfo**](AddressInfo.md) | ☑️ |  |
| **divisionDescription** | **String** |  | Division description |
| **divisionType** | **String** | ☑️ | Division type |
| **externalDivisionId** | **String** | ☑️ | External division identifier |
| **logoUrlMap** | **Map** |  | Logo URL map with base64 encoded images. Keys can be LOGO, PC_LOGO, MOBILE_LOGO |
| **extInfo** | [**CreateDivisionRequest_extInfo**](CreateDivisionRequest_extInfo.md) | ☑️ |  |
| **mccCodes** | **List** | ☑️ | Merchant category codes |
| **businessDocs** | [**List**](BusinessDocs.md) | ☑️ | Business documents. \"individu\" entity can only use KTP and SIM. Other entities can use SIUP and NIB |
| **businessEntity** | **String** | ☑️ | Business entity type |
| **ownerName** | [**UserName**](UserName.md) | ☑️ |  |
| **ownerPhoneNumber** | [**MobileNoInfo**](MobileNoInfo.md) | ☑️ |  |
| **ownerIdType** | **String** | ☑️ | Owner identifier type |
| **ownerIdNo** | **String** | ☑️ | Owner identifier number. Length depends on ownerIdType - KTP (16), SIM (12-14), Passport (8), NIB (>=13), SIUP (free text) |
| **ownerAddress** | [**AddressInfo**](AddressInfo.md) | ☑️ |  |
| **directorPics** | [**List**](PicInfo.md) | ☑️ | Director as a PIC of sub merchant |
| **nonDirectorPics** | [**List**](PicInfo.md) | ☑️ | Non director which become a PIC of sub merchant |
| **sizeType** | **String** | ☑️ | Size type |
| **pgDivisionFlag** | **String** |  | Flag if division is type PG |

[[Back to README]](../../../../README.md)
