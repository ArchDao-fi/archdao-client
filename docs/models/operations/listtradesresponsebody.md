# ListTradesResponseBody

OK

## Example Usage

```typescript
import { ListTradesResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListTradesResponseBody = {
  data: [
    {
      id: 103589,
      side: "fail",
      address: "77997 Isabella Greens",
      direction: "buy",
      amount: 3520.33,
      price: 7030.42,
      txHash: "<value>",
      created: new Date("2026-04-16T08:09:06.841Z"),
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
| `data`                                                         | [components.Trade](../../models/components/trade.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |