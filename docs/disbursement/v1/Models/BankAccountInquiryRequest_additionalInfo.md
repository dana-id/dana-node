# BankAccountInquiryRequest_additionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **fundType** | **String** | ☑️ | Additional information of withdraw fund type, i.e.<br> MERCHANT_WITHDRAW_FOR_CORPORATE  |
| **externalDivisionId** | **String** |  | Additional information of external division identifier. (fundType: MERCHANT_WITHDRAW_FOR_CORPORATE)<br> Notes: The required of this parameter is Optional, but if \"additionalInfo.chargeTarget\" has value DIVISION then the required of this parameter will be changed to Mandatory  |
| **chargeTarget** | **String** |  | Additional information of charge target. The values are:<br> • null<br> • DIVISION<br> • MERCHANT<br> Notes: If the value is DIVISION, externalDivisionId will be Mandatory  |
| **beneficiaryBankCode** | **String** | ☑️ | Additional information of beneficiary Bank code |
| **beneficiaryAccountName** | **String** |  | Additional information of beneficiary account name for validation purpose |
| **accountType** | **String** |  | Additional information of account type |
| **accessToken** | **String** |  | Contains customer token, which has been obtained from binding process, refer to Account Binding & Unbinding documentation<br> If request is coming from user interaction, this field is mandatory. If not, just filled customerNumber  |

[[Back to README]](../../../../README.md)
