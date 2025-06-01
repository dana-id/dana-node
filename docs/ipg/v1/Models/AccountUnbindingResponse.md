# AccountUnbindingResponse
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **responseCode** | **String** | ☑️ | Response code. Refer to https://dashboard.dana.id/api-docs/read/108#HTML-AccountUnbinding-ResponseCodeandMessage |
| **responseMessage** | **String** | ☑️ | Response message. Refer to https://dashboard.dana.id/api-docs/read/108#HTML-AccountUnbinding-ResponseCodeandMessage |
| **referenceNo** | **String** |  | Transaction identifier on DANA system |
| **partnerReferenceNo** | **String** |  | Unique transaction identifier on partner system which assigned to each transaction |
| **merchantId** | **String** |  | Merchant identifier that is unique per each merchant |
| **subMerchantId** | **String** |  | Information of sub merchant identifier |
| **linkId** | **String** |  | Information of link identifier |
| **unlinkResult** | **String** |  | Result of unlinking process |
| **additionalInfo** | [**Object**](.md) |  | Additional information |

[[Back to README]](../../../../README.md)
