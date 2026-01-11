# ListUsersRequest

## Example Usage

```typescript
import { ListUsersRequest } from "@archdao/archdao-client/models/operations";

let value: ListUsersRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `page`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Page number (1-indexed)                                    |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Items per page                                             |
| `role`                                                     | [components.UserRole](../../models/components/userrole.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Search by address or name                                  |