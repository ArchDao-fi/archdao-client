# BaseProposal

Partial proposal model used in list responses and embedded contexts

## Example Usage

```typescript
import { BaseProposal } from "@archdao/archdao-client/models/components/baseproposal.js";

let value: BaseProposal = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ProposalStatus](../../models/components/proposalstatus.md)                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outcome`                                                                                     | [components.ProposalOutcome](../../models/components/proposaloutcome.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `totalStaked`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |