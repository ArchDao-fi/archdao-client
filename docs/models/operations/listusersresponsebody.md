# ListUsersResponseBody

Users retrieved

## Example Usage

```typescript
import { ListUsersResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListUsersResponseBody = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
  data: [
    {
      id: 1,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      name: "0x1234...5678",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              | true                                                                             |
| `pagination`                                                                     | [operations.ListUsersPagination](../../models/operations/listuserspagination.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `data`                                                                           | [components.User](../../models/components/user.md)[]                             | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |