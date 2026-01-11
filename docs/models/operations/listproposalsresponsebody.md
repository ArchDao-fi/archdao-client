# ListProposalsResponseBody

Proposals retrieved

## Example Usage

```typescript
import { ListProposalsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListProposalsResponseBody = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `success`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      | true                                                                                     |
| `pagination`                                                                             | [operations.ListProposalsPagination](../../models/operations/listproposalspagination.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `data`                                                                                   | [components.BaseProposal](../../models/components/baseproposal.md)[]                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |