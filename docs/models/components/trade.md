# Trade

## Example Usage

```typescript
import { Trade } from "@archdao/archdao-client/models/components/trade.js";

let value: Trade = {
  id: 13135,
  side: "fail",
  address: "20753 Terry Avenue",
  direction: "buy",
  amount: 9227.2,
  price: 1073.2,
  txHash: "<value>",
  created: new Date("2025-12-20T13:11:20.837Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `side`                                                                                        | [components.MarketSide](../../models/components/marketside.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `address`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `direction`                                                                                   | [components.TradeDirection](../../models/components/tradedirection.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `txHash`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |