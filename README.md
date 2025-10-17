## dana-node

The official DANA Node SDK provides a simple and convenient way to call DANA's REST API in applications written in Node.js (based on https://dashboard.dana.id/api-docs-v2/).

## ⚠️ **Run This First - Save Days of Debugging**

Before writing any integration code, **run our automated test suite**. It takes **under 2 minutes** and shows you how the full flow works — **with your own credentials**.

Here is the link: https://github.com/dana-id/uat-script.

### Why This Matters

- 🧪 Validates your setup instantly
- 👀 **See exactly how each scenario flows**
- 🧾 Gives us logs to help you faster
- 🚫 Skipping this = guaranteed delays 


### What It Does

✅ Runs full scenario checks for DANA Sandbox

✅ Installs and executes automatically

✅ Shows real-time results in your terminal

✅ Runs in a safe, simulation-only environment

> Don’t fly blind. Run the test first. See the flow. Build with confidence.

  
  .  

  .


# Getting Started

## Installation

### Requirements

- Node.js 18.0 or later.

### Install with npm

```bash
npm install dana-node@latest --save
```

TypeScript support is included in this package.

## Environment Variables

Before using the SDK, please make sure to set the following environment variables (In .env):

| Name                     | Description                                                                                                                   | Example Value                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `ENV` or `DANA_ENV`      | Defines which environment the SDK will use. Possible values: `SANDBOX` or `PRODUCTION`.                                       | `SANDBOX`                                                                       |
| `X_PARTNER_ID`           | Unique identifier for partner, provided by DANA, also known as `clientId`.                                                    | 1970010100000000000000                                                          |
| `PRIVATE_KEY`            | Your private key string.                                                                                                      | `-----BEGIN PRIVATE KEY-----MIIBVgIBADANBg...LsvTqw==-----END PRIVATE KEY-----` |
| `PRIVATE_KEY_PATH`       | Path to your private key file. If both are set, `PRIVATE_KEY_PATH` is used.                                                   | /path/to/your_private_key.pem                                                   |
| `DANA_PUBLIC_KEY`        | DANA public key string for parsing webhook.                                                                                   | `-----BEGIN PUBLIC KEY-----MIIBIjANBgkq...Do/QIDAQAB-----END PUBLIC KEY-----`   |
| `DANA_PUBLIC_KEY_PATH`   | Path to DANA public key file for parsing webhook. If both set, `DANA_PUBLIC_KEY_PATH is used.                                 | /path/to/dana_public_key.pem                                                    |
| `ORIGIN`                 | Origin domain.                                                                                                                | https://yourdomain.com                                                          |
| `CLIENT_SECRET`          | Assigned client secret during registration. Must be set for DisbursementApi.                                                  | your_client_secret                                                              |
| `X_DEBUG`                | Enable debug mode if set to 'true'. Debug mode will show reason of failed request in additionalInfo.debugMessage in response. | true                                                                            |

You can see these variables in .env.example, fill it, and change the file name to .env (remove the .example extension)

## Authorization

The SDK must be instantiated using your private key. Please check the [DANA API Docs](https://dashboard.dana.id/api-docs/read/45) for a guide on generating one.

```javascript
import { Dana } from "dana-node";

const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
});
```

### Sandbox Environment

By default, the SDK will use the DANA production URL (`https://api.saas.dana.id`) to make API requests.<br/>
If you need to override the environment, you can pass in `env` to the `Dana` constructor.

```javascript
const danaClient = new Dana({
    partnerId: "YOUR_PARTNER_ID", // process.env.X_PARTNER_ID
    privateKey: "YOUR_PRIVATE_KEY", // process.env.X_PRIVATE_KEY
    origin: "YOUR_ORIGIN", // process.env.ORIGIN
    env: "sandbox", // process.env.DANA_ENV or process.env.ENV or "sandbox" or "production"
});
```

## Documentation

Find detailed API information and examples for each of our products by clicking the links below:
* [PaymentGatewayApi](docs/payment_gateway/v1/Apis/PaymentGatewayApi.md)
* [WidgetApi](docs/widget/v1/Apis/WidgetApi.md)
* [DisbursementApi](docs/disbursement/v1/Apis/DisbursementApi.md)
* [MerchantManagementApi](docs/merchant_management/v1/Apis/MerchantManagementApi.md)

## Further Reading

* [DANA API Reference](https://dashboard.dana.id/api-docs-v2/)