## dana-node-api-client

The official DANA Node SDK provides a simple and convenient way to call DANA's REST API in applications written in Node.js.

# Getting Started

## Installation

### Requirements

- Node.js 18.0 or later.

### Install with npm

```bash
npm install dana-node-api-client@latest --save
```

TypeScript support is included in this package.

## Authorization

The SDK must be instantiated using your private key. Please check the [DANA API Docs](https://dashboard.dana.id/api-docs/read/45) for a guide on generating one.

```javascript
import { Dana } from "dana-node-api-client";

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
    env: "sandbox", // process.env.ENV
});
```

## Documentation

Find detailed API information and examples for each of our products by clicking the links below:
* [PaymentGatewayApi](docs/payment_gateway/v1/Apis/PaymentGatewayApi.md)
* [IPGApi](docs/ipg/v1/Apis/IPGApi.md)

## Further Reading

* [DANA API Reference](https://dashboard.dana.id/api-docs)