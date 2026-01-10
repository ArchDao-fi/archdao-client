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
* [configureRaise](#configureraise) - Configure raise settings

## listOrganizations

Returns a paginated list of organizations. Visibility varies by authentication status and role.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript();

async function run() {
  const result = await archdaoApiTypescript.organization.listOrganizations({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationListOrganizations } from "@draft/archdao-api-typescript/funcs/organizationListOrganizations.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore();

async function run() {
  const res = await organizationListOrganizations(archdaoApiTypescript, {});
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createOrganization

Creates a new organization (external or ICO type). Uses multipart/form-data for image uploads.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.organization.createOrganization({
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
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationCreateOrganization } from "@draft/archdao-api-typescript/funcs/organizationCreateOrganization.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationCreateOrganization(archdaoApiTypescript, {
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401             | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getOrganization

Returns full organization details including proposals.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript();

async function run() {
  const result = await archdaoApiTypescript.organization.getOrganization({
    slug: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationGetOrganization } from "@draft/archdao-api-typescript/funcs/organizationGetOrganization.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore();

async function run() {
  const res = await organizationGetOrganization(archdaoApiTypescript, {
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## editOrganization

Admin-only endpoint to edit organization details.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.organization.editOrganization({
    id: 384554,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationEditOrganization } from "@draft/archdao-api-typescript/funcs/organizationEditOrganization.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationEditOrganization(archdaoApiTypescript, {
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 401, 403, 404        | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## changeOrganizationStatus

Admin-only endpoint to approve, reject, or activate organizations.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.organization.changeOrganizationStatus({
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
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationChangeOrganizationStatus } from "@draft/archdao-api-typescript/funcs/organizationChangeOrganizationStatus.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationChangeOrganizationStatus(archdaoApiTypescript, {
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

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 403, 404   | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## configureRaise

Admin-only endpoint to set raise dates for ICO organizations.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.organization.configureRaise({
    id: 396097,
    requestBody: {
      startDate: new Date("2026-12-29T03:23:25.992Z"),
      endDate: new Date("2025-08-02T17:54:26.046Z"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { organizationConfigureRaise } from "@draft/archdao-api-typescript/funcs/organizationConfigureRaise.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationConfigureRaise(archdaoApiTypescript, {
    id: 396097,
    requestBody: {
      startDate: new Date("2026-12-29T03:23:25.992Z"),
      endDate: new Date("2025-08-02T17:54:26.046Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationConfigureRaise failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConfigureRaiseRequest](../../models/operations/configureraiserequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ConfigureRaiseResponseBody](../../models/operations/configureraiseresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 403, 404   | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |