# AssetCardListItem
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **contactBizType** | **String** | ☑️ | Contact business type (`ContactBizTypeEnum`) |
| **cardIndexNo** | **String** | ☑️ | Card index number |
| **cardNoLength** | **String** | ☑️ | Card number length based on card index number |
| **maskedCardNo** | **String** | ☑️ | Card number (masked) |
| **assetType** | **String** | ☑️ | Asset / card type (`AssetCardTypeEnum`) |
| **holderName** | [**Map**](AnyType.md) | ☑️ | Holder name (JSON object per DANA spec) |
| **instLogoUrl** | **String** |  | Institution logo URL |
| **instId** | **String** | ☑️ | Institution identifier |
| **instOfficialName** | **String** | ☑️ | Institution official name based on `instId` |
| **expiryYear** | **String** | ☑️ | Expiry year (e.g. debit, credit, virtual account) |
| **expiryMonth** | **String** | ☑️ | Expiry month |
| **verified** | **String** | ☑️ | Whether the user's card is verified |
| **bindingId** | **String** |  | Asset card bind identifier |
| **defaultAsset** | **String** |  | Whether this asset is the user's default payment |
| **enableStatus** | **String** |  | Whether the card status is enabled; `\"true\"` when `enableOnly` in request was true |
| **directDebit** | **String** |  | Whether payment uses direct debit |

[[Back to README]](../../../../README.md)
