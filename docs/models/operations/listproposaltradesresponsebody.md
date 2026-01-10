# ListProposalTradesResponseBody

Trades retrieved

## Example Usage

```typescript
import { ListProposalTradesResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: ListProposalTradesResponseBody = {
  success: true,
  pagination: {
    page: 1,
    pageSize: 20,
    totalItems: 100,
    totalPages: 5,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                | true                                                                                               |
| `pagination`                                                                                       | [operations.ListProposalTradesPagination](../../models/operations/listproposaltradespagination.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `data`                                                                                             | [components.Trade](../../models/components/trade.md)[]                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |