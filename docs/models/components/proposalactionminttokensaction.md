# ProposalActionMintTokensAction

## Example Usage

```typescript
import { ProposalActionMintTokensAction } from "@archdao/archdao-client/models/components";

let value: ProposalActionMintTokensAction = {
  amount: 2345.28,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `actionType`                   | *string*                       | :heavy_check_mark:             | N/A                            |
| `amount`                       | *number*                       | :heavy_check_mark:             | N/A                            |
| `recipientAddress`             | *string*                       | :heavy_minus_sign:             | Optional, defaults to treasury |
| `order`                        | *number*                       | :heavy_minus_sign:             | N/A                            |