# ProposalAction

## Example Usage

```typescript
import { ProposalAction } from "@archdao/archdao-client/models/components";

let value: ProposalAction = {
  actionType: "burn_tokens",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `proposalId`                                                   | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `order`                                                        | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `actionType`                                                   | [components.ActionType](../../models/components/actiontype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `recipientAddress`                                             | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `amount`                                                       | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `token`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `action`                                                       | [components.Action](../../models/components/action.md)         | :heavy_minus_sign:                                             | N/A                                                            |
| `tokenAmount`                                                  | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `usdcAmount`                                                   | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `uri`                                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |