# ListProposalsRequest

## Example Usage

```typescript
import { ListProposalsRequest } from "@archdao/archdao-client/models/operations";

let value: ListProposalsRequest = {};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `page`                                   | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `limit`                                  | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `search`                                 | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `fields`                                 | *string*                                 | :heavy_minus_sign:                       | Comma-separated fields to search         |
| `status`                                 | *string*                                 | :heavy_minus_sign:                       | Filter by status (comma-separated)       |
| `organizationId`                         | *string*                                 | :heavy_minus_sign:                       | Filter by organization (comma-separated) |