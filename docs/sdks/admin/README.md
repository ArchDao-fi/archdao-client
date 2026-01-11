# Admin
(*admin*)

## Overview

Admin-only management endpoints

### Available Operations

* [listUsers](#listusers) - List users
* [changeUserRole](#changeuserrole) - Change user role
* [listAuditLogs](#listauditlogs) - List audit logs

## listUsers

Admin-only endpoint to list all users with optional filters.

**Searchable fields:** `address`, `name`

**Default search field:** `address`

### Example Usage

```typescript
import { Archdao } from "@archdao/archdao-client";

const archdao = new Archdao({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdao.admin.listUsers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoCore } from "@archdao/archdao-client/core.js";
import { adminListUsers } from "@archdao/archdao-client/funcs/adminListUsers.js";

// Use `ArchdaoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdao = new ArchdaoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await adminListUsers(archdao, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminListUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUsersRequest](../../models/operations/listusersrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListUsersResponseBody](../../models/operations/listusersresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 401, 403         | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## changeUserRole

Admin-only endpoint to promote or demote users.

**Error Codes:** `VALIDATION_ERROR`, `USER_NOT_FOUND`, `NOT_AUTHORIZED`, `INVALID_TOKEN`

### Example Usage

```typescript
import { Archdao } from "@archdao/archdao-client";

const archdao = new Archdao({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdao.admin.changeUserRole({
    id: 282852,
    requestBody: {
      role: "user",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoCore } from "@archdao/archdao-client/core.js";
import { adminChangeUserRole } from "@archdao/archdao-client/funcs/adminChangeUserRole.js";

// Use `ArchdaoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdao = new ArchdaoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await adminChangeUserRole(archdao, {
    id: 282852,
    requestBody: {
      role: "user",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminChangeUserRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChangeUserRoleRequest](../../models/operations/changeuserrolerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChangeUserRoleResponseBody](../../models/operations/changeuserroleresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Err         | 400, 401, 403, 404 | application/json   |
| errors.ArchError   | 4XX, 5XX           | \*/\*              |

## listAuditLogs

Admin-only endpoint to view audit trail of admin actions.

### Example Usage

```typescript
import { Archdao } from "@archdao/archdao-client";

const archdao = new Archdao({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdao.admin.listAuditLogs({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoCore } from "@archdao/archdao-client/core.js";
import { adminListAuditLogs } from "@archdao/archdao-client/funcs/adminListAuditLogs.js";

// Use `ArchdaoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdao = new ArchdaoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await adminListAuditLogs(archdao, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminListAuditLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditLogsRequest](../../models/operations/listauditlogsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAuditLogsResponseBody](../../models/operations/listauditlogsresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 401, 403         | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |