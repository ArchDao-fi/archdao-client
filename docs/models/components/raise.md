# Raise

## Example Usage

```typescript
import { Raise } from "@archdao/archdao-client/models/components";

let value: Raise = {
  softCap: 7974.6,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `address`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | EVM address of the raise contract                                                             |
| `softCap`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `acceptedAmount`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.RaiseStatus](../../models/components/raisestatus.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `allocations`                                                                                 | [components.RaiseAllocation](../../models/components/raiseallocation.md)[]                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contributions`                                                                               | [components.RaiseContribution](../../models/components/raisecontribution.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |