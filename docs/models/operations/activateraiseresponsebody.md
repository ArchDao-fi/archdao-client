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
    tokenSupply: 6062.18,
    usdcSupply: 2917.93,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `success`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `data`                    | *components.Organization* | :heavy_minus_sign:        | N/A                       |