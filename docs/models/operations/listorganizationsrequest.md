# ListOrganizationsRequest

## Example Usage

```typescript
import { ListOrganizationsRequest } from "@archdao/archdao-client/models/operations";

let value: ListOrganizationsRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `limit`                                            | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `search`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `fields`                                           | *string*                                           | :heavy_minus_sign:                                 | Comma-separated fields to search                   |
| `status`                                           | *string*                                           | :heavy_minus_sign:                                 | Filter by status (comma-separated)                 |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_minus_sign:                                 | N/A                                                |