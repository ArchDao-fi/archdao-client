# DecisionMarket

## Example Usage

```typescript
import { DecisionMarket } from "@archdao/archdao-client/models/components";

let value: DecisionMarket = {
  id: 190030,
  proposalId: 986990,
  side: "pass",
  poolAddress: "<value>",
  conditionalTokenAddress: "<value>",
  conditionalUsdcAddress: "<value>",
  price: 3265.48,
  twapObservation: 1211.92,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `side`                                                                                        | [components.Side](../../models/components/side.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `poolAddress`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conditionalTokenAddress`                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conditionalUsdcAddress`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `twapObservation`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |