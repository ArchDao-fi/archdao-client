# UpdateProposal

## Example Usage

```typescript
import { UpdateProposal } from "@archdao/archdao-client/models/components";

let value: UpdateProposal = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `title`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `actions`                                                                          | [components.ProposalAction](../../models/components/proposalaction.md)[]           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `status`                                                                           | [components.UpdateProposalStatus](../../models/components/updateproposalstatus.md) | :heavy_minus_sign:                                                                 | Set to 'staking' to submit draft                                                   |