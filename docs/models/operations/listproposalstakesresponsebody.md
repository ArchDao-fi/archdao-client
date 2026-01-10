# ListProposalStakesResponseBody

Stakes retrieved

## Example Usage

```typescript
import { ListProposalStakesResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: ListProposalStakesResponseBody = {
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
| `pagination`                                                                                       | [operations.ListProposalStakesPagination](../../models/operations/listproposalstakespagination.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `data`                                                                                             | [components.ProposalStake](../../models/components/proposalstake.md)[]                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |