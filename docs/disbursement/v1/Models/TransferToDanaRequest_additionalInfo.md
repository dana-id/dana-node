# TransferToDanaRequest_additionalInfo
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **extendInfo** | **String** |  | Additional information of extend |
| **accountType** | **String** |  | Additional information of account type |
| **fundType** | **String** | ☑️ | Additional information of transfer to DANA fund type, i.e.<br> AGENT_TOPUP_FOR_USER_SETTLE  |
| **externalDivisionId** | **String** |  | Additional information of external division identifier. This parameter only used for Transfer to DANA subMerchant (fundType : AGENT_TOPUP_FOR_USER_SETTLE)<br> Notes:<br> The required of this parameter is Optional, but if \"additionalInfo.chargeTarget\" has value DIVISION then the required of this parameter will be changed to Mandatory  |
| **chargeTarget** | **String** |  | Additional information of charge target. This parameter only used for Transfer to DANA subMerchant. The value are:<br> • null<br> • DIVISION<br> • MERCHANT<br> if the value is DIVISION, externalDivisionId will be Mandatory  |
| **accessToken** | **String** |  | Contains customer token, which has been obtained from binding process, refer to Account Binding & Unbinding documentation<br> If request is coming from user interaction, this field is mandatory. If not, just filled customerNumber  |
| **customerId** | **String** |  | Public user identifier of DANA user.<br> Notes: If used, requires customerNumber to be filled with default phone number literal \"620000000000\"  |

[[Back to README]](../../../../README.md)
