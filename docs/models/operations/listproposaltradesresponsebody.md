# ListProposalTradesResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListProposalTradesResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListProposalTradesResponseBody = {
  success: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pagination`                                                                                       | [operations.ListProposalTradesPagination](../../models/operations/listproposaltradespagination.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.Trade](../../models/components/trade.md)[]                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |