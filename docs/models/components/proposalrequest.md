# ProposalRequest

## Example Usage

```typescript
import { ProposalRequest } from "@archdao/archdao-client/models/components/proposalrequest.js";

let value: ProposalRequest = {
  organizationId: 790851,
  title: "<value>",
  description: "hence unimpressively voluntarily for inside sheathe lone",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `organizationId`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `status`                                                                 | [components.ProposalStatus](../../models/components/proposalstatus.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `outcome`                                                                | [components.ProposalOutcome](../../models/components/proposaloutcome.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `actions`                                                                | *components.ProposalActionRequest*[]                                     | :heavy_minus_sign:                                                       | N/A                                                                      |