# Raise
(*raise*)

## Overview

ICO raise management

### Available Operations

* [listRaises](#listraises) - List raises
* [getRaise](#getraise) - Get raise
* [updateRaise](#updateraise) - Update raise
* [listContributions](#listcontributions) - List contributions

## listRaises

Returns paginated list of raises.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.raise.listRaises({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { raiseListRaises } from "@archdao/archdao-client/funcs/raiseListRaises.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore();

async function run() {
  const res = await raiseListRaises(archDAO, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("raiseListRaises failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRaisesRequest](../../models/operations/listraisesrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListRaisesSecurity](../../models/operations/listraisessecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListRaisesResponseBody](../../models/operations/listraisesresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## getRaise

Returns raise details including allocations.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.raise.getRaise(1);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { raiseGetRaise } from "@archdao/archdao-client/funcs/raiseGetRaise.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore();

async function run() {
  const res = await raiseGetRaise(archDAO, 1);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("raiseGetRaise failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetRaiseSecurity](../../models/operations/getraisesecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |                                                                                                                                                                                |
| `id`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetRaiseResponseBody](../../models/operations/getraiseresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.ArchError     | 4XX, 5XX             | \*/\*                |

## updateRaise

Owner can set acceptedAmount during finalizing. Admin can also update status.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.raise.updateRaise({
    id: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { raiseUpdateRaise } from "@archdao/archdao-client/funcs/raiseUpdateRaise.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await raiseUpdateRaise(archDAO, {
    id: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("raiseUpdateRaise failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRaiseRequest](../../models/operations/updateraiserequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateRaiseResponseBody](../../models/operations/updateraiseresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 403, 404   | application/json     |
| errors.ArchError     | 4XX, 5XX             | \*/\*                |

## listContributions

Returns paginated list of contributions for a raise.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.raise.listContributions({
    id: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { raiseListContributions } from "@archdao/archdao-client/funcs/raiseListContributions.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore();

async function run() {
  const res = await raiseListContributions(archDAO, {
    id: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("raiseListContributions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListContributionsRequest](../../models/operations/listcontributionsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListContributionsSecurity](../../models/operations/listcontributionssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListContributionsResponseBody](../../models/operations/listcontributionsresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.ArchError     | 4XX, 5XX             | \*/\*                |