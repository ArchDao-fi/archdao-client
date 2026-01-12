# AdjustLpAction

## Example Usage

```typescript
import { AdjustLpAction } from "@archdao/archdao-client/models/components";

let value: AdjustLpAction = {
  action: "add",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `action`                                                                                      | [components.Action](../../models/components/action.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokenAmount`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | At least one of tokenAmount or usdcAmount required                                            |
| `usdcAmount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | At least one of tokenAmount or usdcAmount required                                            |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |