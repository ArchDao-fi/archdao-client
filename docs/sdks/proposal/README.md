# Proposal
(*proposal*)

## Overview

Proposal and governance endpoints

### Available Operations

* [listProposals](#listproposals) - List user's proposals
* [createProposal](#createproposal) - Create proposal
* [getProposal](#getproposal) - Get proposal details
* [cancelProposal](#cancelproposal) - Cancel proposal
* [initializeProposal](#initializeproposal) - Initialize proposal
* [listProposalStakes](#listproposalstakes) - List proposal stakes
* [listProposalTrades](#listproposaltrades) - List proposal trades

## listProposals

Returns proposals created by the authenticated user.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.listProposals({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalListProposals } from "@draft/archdao-api-typescript/funcs/proposalListProposals.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalListProposals(archdaoApiTypescript, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalListProposals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProposalsRequest](../../models/operations/listproposalsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProposalsResponseBody](../../models/operations/listproposalsresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 401                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## createProposal

Creates a new proposal in draft status.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.createProposal({
    organizationId: 816972,
    title: "<value>",
    description: "hence alarmed but doubtfully unknown swanling plus tame stratify mmm",
    actions: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalCreateProposal } from "@draft/archdao-api-typescript/funcs/proposalCreateProposal.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalCreateProposal(archdaoApiTypescript, {
    organizationId: 816972,
    title: "<value>",
    description: "hence alarmed but doubtfully unknown swanling plus tame stratify mmm",
    actions: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalCreateProposal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateProposalRequest](../../models/components/createproposalrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateProposalResponseBody](../../models/operations/createproposalresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 404        | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getProposal

Returns full proposal details. Draft proposals are only visible to authorized users.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript();

async function run() {
  const result = await archdaoApiTypescript.proposal.getProposal({
    id: 264645,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalGetProposal } from "@draft/archdao-api-typescript/funcs/proposalGetProposal.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore();

async function run() {
  const res = await proposalGetProposal(archdaoApiTypescript, {
    id: 264645,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalGetProposal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProposalRequest](../../models/operations/getproposalrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetProposalSecurity](../../models/operations/getproposalsecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetProposalResponseBody](../../models/operations/getproposalresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## cancelProposal

Cancels a proposal. Only allowed before trading begins (draft or staking status).

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.cancelProposal({
    id: 330250,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalCancelProposal } from "@draft/archdao-api-typescript/funcs/proposalCancelProposal.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalCancelProposal(archdaoApiTypescript, {
    id: 330250,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalCancelProposal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelProposalRequest](../../models/operations/cancelproposalrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelProposalResponseBody](../../models/operations/cancelproposalresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 403, 404   | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## initializeProposal

Submits a draft proposal to the staking phase.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.initializeProposal({
    id: 301133,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalInitializeProposal } from "@draft/archdao-api-typescript/funcs/proposalInitializeProposal.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalInitializeProposal(archdaoApiTypescript, {
    id: 301133,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalInitializeProposal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InitializeProposalRequest](../../models/operations/initializeproposalrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitializeProposalResponseBody](../../models/operations/initializeproposalresponsebody.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400, 401, 403, 404, 409 | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## listProposalStakes

Returns a paginated list of stakes for a proposal.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.listProposalStakes({
    id: 854415,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalListProposalStakes } from "@draft/archdao-api-typescript/funcs/proposalListProposalStakes.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalListProposalStakes(archdaoApiTypescript, {
    id: 854415,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalListProposalStakes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProposalStakesRequest](../../models/operations/listproposalstakesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProposalStakesResponseBody](../../models/operations/listproposalstakesresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## listProposalTrades

Returns a paginated list of trades for a proposal's decision markets.

### Example Usage

```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.proposal.listProposalTrades({
    id: 977484,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArchdaoApiTypescriptCore } from "@draft/archdao-api-typescript/core.js";
import { proposalListProposalTrades } from "@draft/archdao-api-typescript/funcs/proposalListProposalTrades.js";

// Use `ArchdaoApiTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const archdaoApiTypescript = new ArchdaoApiTypescriptCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proposalListProposalTrades(archdaoApiTypescript, {
    id: 977484,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proposalListProposalTrades failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProposalTradesRequest](../../models/operations/listproposaltradesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProposalTradesResponseBody](../../models/operations/listproposaltradesresponsebody.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |