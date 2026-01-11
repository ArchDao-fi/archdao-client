# ListUsersRequest

## Example Usage

```typescript
import { ListUsersRequest } from "@archdao/archdao-client/models/operations";

let value: ListUsersRequest = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `page`                                                                                                             | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Page number (1-indexed)                                                                                            |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Items per page                                                                                                     |
| `search`                                                                                                           | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Text to search for across searchable fields                                                                        |
| `fields`                                                                                                           | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Comma-separated list of fields to search. Must be valid searchable fields. If omitted, uses default search fields. |
| `role`                                                                                                             | [components.UserRole](../../models/components/userrole.md)                                                         | :heavy_minus_sign:                                                                                                 | Filter by user role                                                                                                |