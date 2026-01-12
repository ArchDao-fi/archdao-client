# ActivateRaiseResponseBody

Success response wrapper

## Example Usage

```typescript
import { ActivateRaiseResponseBody } from "@archdao/archdao-client/models/operations/activateraise.js";

let value: ActivateRaiseResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    user: {
      id: 1,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      name: "0x1234...5678",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.ActivateRaiseData](../../models/operations/activateraisedata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |