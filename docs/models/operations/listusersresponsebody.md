# ListUsersResponseBody

OK

## Example Usage

```typescript
import { ListUsersResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListUsersResponseBody = {
  data: [
    {
      id: 824217,
      address: "58430 N Railroad Street",
      name: "<value>",
      role: "user",
      created: new Date("2026-12-01T04:30:58.253Z"),
      updated: new Date("2026-01-30T00:09:25.946Z"),
    },
  ],
  pagination: {
    page: 769659,
    limit: 367168,
    total: 914445,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.User](../../models/components/user.md)[]           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |