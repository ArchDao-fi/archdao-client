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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateOrganizationRequestBody](../../models/operations/createorganizationrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateOrganizationResponseBody](../../models/operations/createorganizationresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 400, 401         | application/json |
| errors.ArchError | 4XX, 5XX         | \*/\*            |

## getOrganization

Returns full organization details including proposals.

**Error Codes:** `ORGANIZATION_NOT_FOUND`, `NOT_AUTHORIZED`

### Example Usage

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.organization.getOrganization({
    slug: "<value>",
  });

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
  const res = await organizationGetOrganization(archDAO, {
    slug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationRequest](../../models/operations/getorganizationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetOrganizationSecurity](../../models/operations/getorganizationsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrganizationResponseBody](../../models/operations/getorganizationresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 404              | application/json |
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
  const result = await archDAO.organization.editOrganization({
    id: 384554,
  });

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
  const res = await organizationEditOrganization(archDAO, {
    id: 384554,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationEditOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditOrganizationRequest](../../models/operations/editorganizationrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EditOrganizationResponseBody](../../models/operations/editorganizationresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Err       | 401, 403, 404    | application/json |
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
  const result = await archDAO.organization.changeOrganizationStatus({
    id: 985976,
    requestBody: {
      status: "failed",
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
import { organizationChangeOrganizationStatus } from "@archdao/archdao-client/funcs/organizationChangeOrganizationStatus.js";

// Use `ArchDAOCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archDAO = new ArchDAOCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationChangeOrganizationStatus(archDAO, {
    id: 985976,
    requestBody: {
      status: "failed",
    },
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChangeOrganizationStatusRequest](../../models/operations/changeorganizationstatusrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChangeOrganizationStatusResponseBody](../../models/operations/changeorganizationstatusresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Err         | 400, 401, 403, 404 | application/json   |
| errors.ArchError   | 4XX, 5XX           | \*/\*              |

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
  const result = await archDAO.organization.activateRaise({
    id: 398388,
  });

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
  const res = await organizationActivateRaise(archDAO, {
    id: 398388,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationActivateRaise failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActivateRaiseRequest](../../models/operations/activateraiserequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivateRaiseResponseBody](../../models/operations/activateraiseresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Err         | 400, 401, 403, 404 | application/json   |
| errors.ArchError   | 4XX, 5XX           | \*/\*              |