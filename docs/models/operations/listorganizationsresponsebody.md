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
      tokenSupply: 8652.82,
      usdcSupply: 7944.07,
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
| `data`                                                                                                 | *components.Organization*[]                                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [components.Pagination](../../models/components/pagination.md)                                         | :heavy_check_mark:                                                                                     | Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses. |