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
    },
  ],
  pagination: {
    page: 971887,
    limit: 693437,
    total: 769659,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.User](../../models/components/user.md)[]           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |