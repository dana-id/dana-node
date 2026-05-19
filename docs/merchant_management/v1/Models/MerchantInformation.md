# MerchantInformation
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **phoneNumber** | **String** |  | Phone number |
| **merchantId** | **String** |  | Merchant identifier |
| **merchantType** | **String** |  | Merchant type |
| **merchantSubType** | **String** |  | Merchant sub type |
| **mccCodes** | **List** |  | Merchant category codes (MCC) |
| **logoUrl** | **String** |  | Logo URL |
| **logoUrlMap** | **Map** |  | Logo map. Keys may be `LOGO`, `PC_LOGO`, `MOBILE_LOGO`. Values are base64-encoded PNG image data.  |
| **shortNameCode** | **String** |  | Merchant short name code |
| **officialName** | **String** |  | Merchant official name |
| **englishName** | **String** |  | Merchant English name |
| **localName** | **String** |  | Merchant local (Indonesian) name |
| **certificate** | [**MerchantCertificateInfo**](MerchantCertificateInfo.md) |  |  |
| **registeredAddress** | [**MerchantContactAddress**](MerchantContactAddress.md) |  |  |
| **businessAddress** | [**MerchantContactAddress**](MerchantContactAddress.md) |  |  |
| **officeTelephone** | **String** |  | Merchant official telephone number |
| **faxTelephone** | **String** |  | Merchant official fax telephone number |
| **corporateOfficialName** | [**UserName**](UserName.md) |  |  |
| **corporateCertificate** | [**MerchantCorporateCertificate**](MerchantCorporateCertificate.md) |  |  |
| **contactOfficialName** | [**UserName**](UserName.md) |  |  |
| **contactMobileNo** | [**MerchantContactMobileNo**](MerchantContactMobileNo.md) |  |  |
| **contactTelephone** | **String** |  | Contact telephone number |
| **contactEmail** | [**MerchantContactEmail**](MerchantContactEmail.md) |  |  |
| **createdTime** | **String** |  | Merchant creation time, YYYY-MM-DDTHH:mm:ss+07:00 (GMT+7) |
| **modifiedTime** | **String** |  | Merchant last modified time, YYYY-MM-DDTHH:mm:ss+07:00 (GMT+7) |
| **merchantStatus** | **String** |  | Merchant status |
| **registerSource** | **String** |  | Registered source platform |
| **sizeType** | **String** |  | Size type |
| **platformMid** | **String** |  | Merchant platform identifier |
| **taxNo** | **String** |  | Tax number (NPWP), 15 digits |
| **accounts** | [**List**](MerchantAccountInfo.md) |  | Merchant account list (present when `isQueryAccount` is true in request) |
| **brandName** | **String** |  | Brand name on legal name or tax name |
| **taxAddress** | [**MerchantContactAddress**](MerchantContactAddress.md) |  |  |

[[Back to README]](../../../../README.md)
