# CreateProposalResponseBody

Created

## Example Usage

```typescript
import { CreateProposalResponseBody } from "@archdao/archdao-client/models/operations";

let value: CreateProposalResponseBody = {
  data: {
    id: 224613,
    organizationId: 716209,
    userId: 413857,
    title: "<value>",
    description: "functional lobster taxicab teammate carpool",
    status: "active",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Proposal](../../models/components/proposal.md) | :heavy_check_mark:                                         | N/A                                                        |