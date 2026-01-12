# Treasury

## Example Usage

```typescript
import { Treasury } from "@archdao/archdao-client/models/components";

let value: Treasury = {
  id: 863005,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `address`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `monthlyBudget`                                        | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `tokenSupplyLp`                                        | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `usdcSupplyLp`                                         | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `tokenReserve`                                         | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `usdcReserve`                                          | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `status`                                               | [components.Status](../../models/components/status.md) | :heavy_minus_sign:                                     | N/A                                                    |