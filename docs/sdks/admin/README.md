# Admin
(*admin*)

## Overview

Admin operations

### Available Operations

* [changeUserRole](#changeuserrole) - Change user role
* [listAuditLogs](#listauditlogs) - List audit logs

## changeUserRole

Admin-only. Promote or demote users.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.admin.changeUserRole({
    id: 1,
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
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { adminChangeUserRole } from "@archdao/archdao-client/funcs/adminChangeUserRole.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await adminChangeUserRole(archDAO, {
    id: 1,
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 403, 404   | application/json     |
| errors.ArchError     | 4XX, 5XX             | \*/\*                |

## listAuditLogs

Admin-only. View audit trail of admin actions.

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.admin.listAuditLogs({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { adminListAuditLogs } from "@archdao/archdao-client/funcs/adminListAuditLogs.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await adminListAuditLogs(archDAO, {});
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 401, 403             | application/json     |
| errors.ArchError     | 4XX, 5XX             | \*/\*                |