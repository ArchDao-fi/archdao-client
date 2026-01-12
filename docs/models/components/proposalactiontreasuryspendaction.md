# ProposalActionTreasurySpendAction

## Example Usage

```typescript
import { ProposalActionTreasurySpendAction } from "@archdao/archdao-client/models/components";

let value: ProposalActionTreasurySpendAction = {
  recipientAddress: "<value>",
  amount: 5137.46,
  token: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `actionType`            | *string*                | :heavy_check_mark:      | N/A                     |
| `recipientAddress`      | *string*                | :heavy_check_mark:      | Valid wallet address    |
| `amount`                | *number*                | :heavy_check_mark:      | N/A                     |
| `token`                 | *string*                | :heavy_check_mark:      | Token address or 'USDC' |
| `order`                 | *number*                | :heavy_minus_sign:      | N/A                     |