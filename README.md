# archdao-client

Developer-friendly, idiomatic Typescript SDK for the *archdao-client* API.

<div align="left">
    <a href="https://www.scalar.com/?utm_source=archdao-client&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20scalar+speakeasy-212015?style=for-the-badge&logo=scalar&labelColor=252525" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br />

## Summary

ArchDAO API: Backend API for the ArchDAO futarchy-based governance platform. All authentication is done via JWT tokens issued through wallet-based login.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@archdao/archdao-client](#archdaoarchdao-client)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @archdao/archdao-client
```

### PNPM

```bash
pnpm add @archdao/archdao-client
```

### Bun

```bash
bun add @archdao/archdao-client
```

### Yarn

```bash
yarn add @archdao/archdao-client zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `bearerAuth` | http | HTTP Bearer |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.organization.listOrganizations({
    status: "approved,active",
  }, {});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [admin](docs/sdks/admin/README.md)

* [listUsers](docs/sdks/admin/README.md#listusers) - List users
* [changeUserRole](docs/sdks/admin/README.md#changeuserrole) - Change user role
* [listAuditLogs](docs/sdks/admin/README.md#listauditlogs) - List audit logs


### [authentication](docs/sdks/authentication/README.md)

* [createNonce](docs/sdks/authentication/README.md#createnonce) - Create Nonce
* [login](docs/sdks/authentication/README.md#login) - Login
* [logout](docs/sdks/authentication/README.md#logout) - Logout
* [getSelf](docs/sdks/authentication/README.md#getself) - Get Self

### [organization](docs/sdks/organization/README.md)

* [listOrganizations](docs/sdks/organization/README.md#listorganizations) - List organizations
* [createOrganization](docs/sdks/organization/README.md#createorganization) - Create organization
* [getOrganization](docs/sdks/organization/README.md#getorganization) - Get organization by slug
* [editOrganization](docs/sdks/organization/README.md#editorganization) - Edit organization
* [changeOrganizationStatus](docs/sdks/organization/README.md#changeorganizationstatus) - Change organization status
* [activateRaise](docs/sdks/organization/README.md#activateraise) - Activate raise

### [proposal](docs/sdks/proposal/README.md)

* [listProposals](docs/sdks/proposal/README.md#listproposals) - List proposals
* [createProposal](docs/sdks/proposal/README.md#createproposal) - Create proposal
* [getProposal](docs/sdks/proposal/README.md#getproposal) - Get proposal details
* [cancelProposal](docs/sdks/proposal/README.md#cancelproposal) - Cancel proposal
* [initializeProposal](docs/sdks/proposal/README.md#initializeproposal) - Initialize proposal
* [listProposalStakes](docs/sdks/proposal/README.md#listproposalstakes) - List proposal stakes
* [listProposalTrades](docs/sdks/proposal/README.md#listproposaltrades) - List proposal trades

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`adminChangeUserRole`](docs/sdks/admin/README.md#changeuserrole) - Change user role
- [`adminListAuditLogs`](docs/sdks/admin/README.md#listauditlogs) - List audit logs
- [`adminListUsers`](docs/sdks/admin/README.md#listusers) - List users
- [`authenticationCreateNonce`](docs/sdks/authentication/README.md#createnonce) - Create Nonce
- [`authenticationGetSelf`](docs/sdks/authentication/README.md#getself) - Get Self
- [`authenticationLogin`](docs/sdks/authentication/README.md#login) - Login
- [`authenticationLogout`](docs/sdks/authentication/README.md#logout) - Logout
- [`organizationActivateRaise`](docs/sdks/organization/README.md#activateraise) - Activate raise
- [`organizationChangeOrganizationStatus`](docs/sdks/organization/README.md#changeorganizationstatus) - Change organization status
- [`organizationCreateOrganization`](docs/sdks/organization/README.md#createorganization) - Create organization
- [`organizationEditOrganization`](docs/sdks/organization/README.md#editorganization) - Edit organization
- [`organizationGetOrganization`](docs/sdks/organization/README.md#getorganization) - Get organization by slug
- [`organizationListOrganizations`](docs/sdks/organization/README.md#listorganizations) - List organizations
- [`proposalCancelProposal`](docs/sdks/proposal/README.md#cancelproposal) - Cancel proposal
- [`proposalCreateProposal`](docs/sdks/proposal/README.md#createproposal) - Create proposal
- [`proposalGetProposal`](docs/sdks/proposal/README.md#getproposal) - Get proposal details
- [`proposalInitializeProposal`](docs/sdks/proposal/README.md#initializeproposal) - Initialize proposal
- [`proposalListProposals`](docs/sdks/proposal/README.md#listproposals) - List proposals
- [`proposalListProposalStakes`](docs/sdks/proposal/README.md#listproposalstakes) - List proposal stakes
- [`proposalListProposalTrades`](docs/sdks/proposal/README.md#listproposaltrades) - List proposal trades

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

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
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archDAO.authentication.createNonce({
    address: "0x1234567890abcdef1234567890abcdef12345678",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ArchDaoError`](./src/models/errors/archdaoerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { ArchDAO } from "@archdao/archdao-client";
import * as errors from "@archdao/archdao-client/models/errors";

const archDAO = new ArchDAO({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await archDAO.authentication.createNonce({
      address: "0x1234567890abcdef1234567890abcdef12345678",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ArchDaoError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.Err) {
        console.log(error.data$.success); // boolean
        console.log(error.data$.error); // errors.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ArchDaoError`](./src/models/errors/archdaoerror.ts): The base class for HTTP error responses.
  * [`Err`](docs/models/errors/err.md): Error response returned when an operation fails. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ArchDaoError`](./src/models/errors/archdaoerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO({
  serverURL: "https://api.archdao.fi/v1",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ArchDAO } from "@archdao/archdao-client";
import { HTTPClient } from "@archdao/archdao-client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ArchDAO({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ArchDAO } from "@archdao/archdao-client";

const sdk = new ArchDAO({ debugLogger: console });
```
<!-- End Debugging [debug] -->

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Scalar](https://www.scalar.com/?utm_source=archdao-client&utm_campaign=typescript)