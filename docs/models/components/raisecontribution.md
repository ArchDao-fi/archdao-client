# RaiseContribution

## Example Usage

```typescript
import { RaiseContribution } from "@archdao/archdao-client/models/components/raisecontribution.js";

let value: RaiseContribution = {
  id: 216,
  raiseId: 157315,
  address: "88433 Daugherty Drives",
  amountInvested: 695.43,
  created: new Date("2024-09-18T08:32:17.983Z"),
  updated: new Date("2025-06-15T09:17:47.593Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raiseId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `address`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | EVM address of the contributor                                                                |
| `amountInvested`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Amount invested in USDC                                                                       |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |