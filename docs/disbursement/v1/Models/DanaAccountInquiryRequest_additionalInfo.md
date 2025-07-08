# DanaAccountInquiryRequest_additionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **fundType** | **String** | ☑️ | Additional information of top up fund type, i.e.<br> AGENT_TOPUP_FOR_  |
| **externalDivisionId** | **String** |  | Additional information of external division identifier. This parameter only used for Top Up Disbursement subMerchant (fundType : AGENT_TOPUP_FOR_USER_SETTLE)<br> Notes:<br> The required of this parameter is Optional, but if \"additionalInfo.chargeTarget\" has value DIVISION then the required of this parameter will be changed to Mandatory  |
| **chargeTarget** | **String** |  | Additional information of charge target. This parameter only used for Top Up Disbursement subMerchant. The value are:<br> • null<br> • DIVISION<br> • MERCHANT<br> if the value is DIVISION, externalDivisionId will be Mandatory  |
| **accessToken** | **String** |  | 1. Contains customer token, which has been obtained from binding process, refer to Account Binding & Unbinding documentation<br> 2. If request is coming from user interaction, this field is mandatory. If not, just filled customerNumber  |
| **customerId** | **String** |  | Public user identifier of DANA user<br> Notes:<br> If used, requires customerNumber to be filled with default phone number format \"620000000000\"  |

[[Back to README]](../../../../README.md)
