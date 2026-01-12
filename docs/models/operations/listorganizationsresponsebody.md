# ListOrganizationsResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@archdao/archdao-client/models/operations/listorganizations.js";

let value: ListOrganizationsResponseBody = {
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
  pagination: {
    total: 100,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.Organization](../../models/components/organization.md)[]                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [components.Pagination](../../models/components/pagination.md)                                         | :heavy_check_mark:                                                                                     | Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses. |