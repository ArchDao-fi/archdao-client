# GetProposalResponseBody

OK

## Example Usage

```typescript
import { GetProposalResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetProposalResponseBody = {
  data: {
    id: 224613,
    organizationId: 716209,
    userId: 413857,
    title: "<value>",
    description: "functional lobster taxicab teammate carpool",
    status: "active",
    created: new Date("2025-09-06T07:52:15.120Z"),
    updated: new Date("2026-10-18T09:40:15.016Z"),
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Proposal](../../models/components/proposal.md) | :heavy_check_mark:                                         | N/A                                                        |