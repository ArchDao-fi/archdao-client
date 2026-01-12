# ProposalActionAdjustLpAction

## Example Usage

```typescript
import { ProposalActionAdjustLpAction } from "@archdao/archdao-client/models/components/proposalaction.js";

let value: ProposalActionAdjustLpAction = {
  action: "add",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `actionType`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `action`                                               | [components.Action](../../models/components/action.md) | :heavy_check_mark:                                     | N/A                                                    |
| `tokenAmount`                                          | *number*                                               | :heavy_minus_sign:                                     | At least one of tokenAmount or usdcAmount required     |
| `usdcAmount`                                           | *number*                                               | :heavy_minus_sign:                                     | At least one of tokenAmount or usdcAmount required     |
| `order`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |