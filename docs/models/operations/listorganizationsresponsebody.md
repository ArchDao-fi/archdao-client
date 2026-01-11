# ListOrganizationsResponseBody

Organizations retrieved

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListOrganizationsResponseBody = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
  data: [
    {
      token: {
        name: "Example Token",
        symbol: "EXT",
        address: "0x1234...abcd",
        supply: 1000000000,
      },
      user: {
        id: 1,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        name: "0x1234...5678",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  | true                                                                 |
| `pagination`                                                         | [operations.Pagination](../../models/operations/pagination.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `data`                                                               | [components.Organization](../../models/components/organization.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |