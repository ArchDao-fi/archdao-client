# ListStakesResponseBody

OK

## Example Usage

```typescript
import { ListStakesResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListStakesResponseBody = {
  data: [
    {
      id: 306461,
      user: {
        id: 991987,
        address: "77223 Moore Cove",
        name: "<value>",
      },
      amount: 4679.96,
      created: new Date("2024-06-14T12:52:36.837Z"),
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.ProposalStake](../../models/components/proposalstake.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |