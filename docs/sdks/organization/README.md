# Organization
(*organization*)

## Overview

Organization management endpoints

### Available Operations

* [listOrganizations](#listorganizations) - List organizations
* [createOrganization](#createorganization) - Create organization
* [getOrganization](#getorganization) - Get organization by slug
* [editOrganization](#editorganization) - Edit organization
* [changeOrganizationStatus](#changeorganizationstatus) - Change organization status
* [activateRaise](#activateraise) - Activate raise

## listOrganizations

Returns a paginated list of organizations. Visibility varies by authentication status and role.

**Searchable fields:** `name`, `description`

**Default search field:** `name`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.organization.listOrganizations({
    status: "approved,active",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationListOrganizations } from "@archdao/archdao-client/funcs/organizationListOrganizations.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore();

async function run() {
  const res = await organizationListOrganizations(archDAO, {
    status: "approved,active",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationListOrganizations failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useOrganizationListOrganizations,
  useOrganizationListOrganizationsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchOrganizationListOrganizations,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateOrganizationListOrganizations,
  invalidateAllOrganizationListOrganizations,
} from "@archdao/archdao-client/react-query/organizationListOrganizations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListOrganizationsRequest](../../models/operations/listorganizationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListOrganizationsSecurity](../../models/operations/listorganizationssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListOrganizationsResponseBody](../../models/operations/listorganizationsresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## createOrganization

Creates a new organization (external or ICO type). Uses multipart/form-data for image uploads.

**Error Codes:** `VALIDATION_ERROR`, `INVALID_ORG_TYPE`, `INVALID_TOKEN`, `EXPIRED_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.organization.createOrganization({
    name: "<value>",
    description: "since unto hollow fedora greatly hmph",
    contactInformation: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationCreateOrganization } from "@archdao/archdao-client/funcs/organizationCreateOrganization.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationCreateOrganization(archDAO, {
    name: "<value>",
    description: "since unto hollow fedora greatly hmph",
    contactInformation: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationCreateOrganization failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useOrganizationCreateOrganizationMutation
} from "@archdao/archdao-client/react-query/organizationCreateOrganization.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateOrganizationRequestBody](../../models/operations/createorganizationrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateOrganizationResponse](../../models/operations/createorganizationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## getOrganization

Returns full organization details including proposals. For ICO organizations, also includes raise data.

**Error Codes:** `ORGANIZATION_NOT_FOUND`, `NOT_AUTHORIZED`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.organization.getOrganization("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationGetOrganization } from "@archdao/archdao-client/funcs/organizationGetOrganization.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore();

async function run() {
  const res = await organizationGetOrganization(archDAO, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganization failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useOrganizationGetOrganization,
  useOrganizationGetOrganizationSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchOrganizationGetOrganization,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateOrganizationGetOrganization,
  invalidateAllOrganizationGetOrganization,
} from "@archdao/archdao-client/react-query/organizationGetOrganization.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetOrganizationSecurity](../../models/operations/getorganizationsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrganizationResponse](../../models/operations/getorganizationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## editOrganization

Admin-only endpoint to edit organization details.

**Error Codes:** `VALIDATION_ERROR`, `ORGANIZATION_NOT_FOUND`, `NOT_AUTHORIZED`, `INVALID_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.organization.editOrganization(384554);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationEditOrganization } from "@archdao/archdao-client/funcs/organizationEditOrganization.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationEditOrganization(archDAO, 384554);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationEditOrganization failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useOrganizationEditOrganizationMutation
} from "@archdao/archdao-client/react-query/organizationEditOrganization.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.EditOrganizationRequestBody](../../models/operations/editorganizationrequestbody.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EditOrganizationResponse](../../models/operations/editorganizationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## changeOrganizationStatus

Admin-only endpoint to approve, reject, or activate organizations.

**Error Codes:** `VALIDATION_ERROR`, `INVALID_STATUS_TRANSITION`, `ORGANIZATION_NOT_FOUND`, `NOT_AUTHORIZED`, `INVALID_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.organization.changeOrganizationStatus(985976, {
    status: "failed",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationChangeOrganizationStatus } from "@archdao/archdao-client/funcs/organizationChangeOrganizationStatus.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationChangeOrganizationStatus(archDAO, 985976, {
    status: "failed",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationChangeOrganizationStatus failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useOrganizationChangeOrganizationStatusMutation
} from "@archdao/archdao-client/react-query/organizationChangeOrganizationStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.ChangeOrganizationStatusRequestBody](../../models/operations/changeorganizationstatusrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChangeOrganizationStatusResponse](../../models/operations/changeorganizationstatusresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## activateRaise

Admin-only endpoint to activate the raise for ICO organizations. Raise starts immediately with duration from system settings.

**Error Codes:** `VALIDATION_ERROR`, `INVALID_STATUS_TRANSITION`, `ORGANIZATION_NOT_FOUND`, `RAISE_NOT_FOUND`, `NOT_AUTHORIZED`, `INVALID_TOKEN`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.organization.activateRaise(398388);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchDAOCore } from "@archdao/archdao-client/core.js";
import { organizationActivateRaise } from "@archdao/archdao-client/funcs/organizationActivateRaise.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationActivateRaise(archDAO, 398388);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationActivateRaise failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useOrganizationActivateRaiseMutation
} from "@archdao/archdao-client/react-query/organizationActivateRaise.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivateRaiseResponse](../../models/operations/activateraiseresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ArchError | 4XX, 5XX         | \*/\*            |