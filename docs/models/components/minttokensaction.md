# MintTokensAction

## Example Usage

```typescript
import { MintTokensAction } from "@archdao/archdao-client/models/components/proposalaction.js";

let value: MintTokensAction = {
  amount: 2314.02,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientAddress`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional, defaults to treasury                                                                |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |