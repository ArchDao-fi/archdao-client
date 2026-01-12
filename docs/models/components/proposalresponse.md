# ProposalResponse

Success response wrapper

## Example Usage

```typescript
import { ProposalResponse } from "@archdao/archdao-client/models/components/proposalresponse.js";

let value: ProposalResponse = {
  data: {
    organizationId: 31025,
    title: "<value>",
    description: "but upside-down stitcher",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Proposal](../../models/components/proposal.md) | :heavy_check_mark:                                         | N/A                                                        |