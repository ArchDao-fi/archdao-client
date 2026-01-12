# Authentication
(*authentication*)

## Overview

Wallet-based authentication endpoints

### Available Operations

* [createNonce](#createnonce) - Create Nonce
* [login](#login) - Login
* [logout](#logout) - Logout
* [getSelf](#getself) - Get Self

## createNonce

Returns a nonce that the user must sign with their wallet. Creates the user if they do not exist.

**Error Codes:** `VALIDATION_ERROR`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.authentication.createNonce({
    address: "0x1234567890abcdef1234567890abcdef12345678",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { authenticationCreateNonce } from "@archdao/archdao-client/funcs/authenticationCreateNonce.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await authenticationCreateNonce(archDAO, {
    address: "0x1234567890abcdef1234567890abcdef12345678",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationCreateNonce failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateNonceRequestBody](../../models/operations/createnoncerequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateNonceResponseBody](../../models/operations/createnonceresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 400              | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## login

Verifies the wallet signature and returns a JWT token valid for 30 days.

**Error Codes:** `VALIDATION_ERROR`, `INVALID_SIGNATURE`, `USER_NOT_FOUND`, `NONCE_NOT_FOUND`, `INACTIVE_NONCE`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.authentication.login({
    address: "0x1234567890abcdef1234567890abcdef12345678",
    nonce: "1704067200000",
    signature: "0xabcd...",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { authenticationLogin } from "@archdao/archdao-client/funcs/authenticationLogin.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await authenticationLogin(archDAO, {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    nonce: "1704067200000",
    signature: "0xabcd...",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationLogin failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LoginRequestBody](../../models/operations/loginrequestbody.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginResponseBody](../../models/operations/loginresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 400, 404         | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## logout

Deactivates the current nonce. Optionally deactivate all nonces to logout from all devices.

**Error Codes:** `INVALID_TOKEN`, `EXPIRED_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.authentication.logout();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { authenticationLogout } from "@archdao/archdao-client/funcs/authenticationLogout.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await authenticationLogout(archDAO);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationLogout failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LogoutRequestBody](../../models/operations/logoutrequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Ok](../../models/components/ok.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 401              | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## getSelf

Returns the authenticated user's information including active sessions.

**Error Codes:** `INVALID_TOKEN`, `EXPIRED_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.authentication.getSelf();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { authenticationGetSelf } from "@archdao/archdao-client/funcs/authenticationGetSelf.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await authenticationGetSelf(archDAO);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationGetSelf failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSelfResponseBody](../../models/operations/getselfresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 401              | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |