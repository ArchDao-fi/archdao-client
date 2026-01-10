# ListProposalTradesRequest

## Example Usage

```typescript
import { ListProposalTradesRequest } from "@draft/archdao-api-typescript/models/operations";

let value: ListProposalTradesRequest = {
  id: 393418,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | Page number (1-indexed)                            |
| `limit`                                            | *number*                                           | :heavy_minus_sign:                                 | Items per page                                     |
| `side`                                             | [operations.Side](../../models/operations/side.md) | :heavy_minus_sign:                                 | Filter by market side                              |