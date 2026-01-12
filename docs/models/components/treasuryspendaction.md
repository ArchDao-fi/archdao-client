# TreasurySpendAction

## Example Usage

```typescript
import { TreasurySpendAction } from "@archdao/archdao-client/models/components/proposalaction.js";

let value: TreasurySpendAction = {
  recipientAddress: "<value>",
  amount: 7007.96,
  token: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientAddress`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | Valid wallet address                                                                          |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Token address or 'USDC'                                                                       |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |