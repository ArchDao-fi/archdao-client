# ListProposalStakesResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListProposalStakesResponseBody } from "@archdao/archdao-client/models/operations/listproposalstakes.js";

let value: ListProposalStakesResponseBody = {
  success: true,
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
| `pagination`                                                                                       | [operations.ListProposalStakesPagination](../../models/operations/listproposalstakespagination.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.ProposalStake](../../models/components/proposalstake.md)[]                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |