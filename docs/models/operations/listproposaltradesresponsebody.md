# ListProposalTradesResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListProposalTradesResponseBody } from "@archdao/archdao-client/models/operations/listproposaltrades.js";

let value: ListProposalTradesResponseBody = {
  data: [
    {
      id: 623172,
      side: "pass",
      address: "301 Mitchell Glen",
      direction: "sell",
      amount: 1720.29,
      price: 2937.41,
      txHash: "<value>",
      created: new Date("2025-07-07T03:35:51.259Z"),
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
| `data`                                                                                                 | [components.Trade](../../models/components/trade.md)[]                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [components.Pagination](../../models/components/pagination.md)                                         | :heavy_check_mark:                                                                                     | Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses. |