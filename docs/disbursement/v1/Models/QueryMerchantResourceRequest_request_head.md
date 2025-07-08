# QueryMerchantResourceRequest_request_head
## Properties

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| **version** | **String** | ☑️ | API version |
| **function** | **String** | ☑️ | API interface |
| **clientId** | **String** | ☑️ | Client ID provided by DANA, used to identify partner and application system |
| **reqTime** | **Date** | ☑️ | DateTime with timezone, which follows the ISO-8601 standard. Refer to RFC 3339 Section 5.6 |
| **reqMsgId** | **String** | ☑️ | The sequence id of request - Each request will be assigned with a unique id (uuid) |
| **clientSecret** | **String** | ☑️ | Secret key of client - Assigned client secret during registration |
| **reserve** | **String** |  | Reserved for future implementation |

[[Back to README]](../../../../README.md)
