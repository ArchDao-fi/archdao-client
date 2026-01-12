# ChangeOrganizationStatusResponseBody

Success response wrapper

## Example Usage

```typescript
import { ChangeOrganizationStatusResponseBody } from "@archdao/archdao-client/models/operations/changeorganizationstatus.js";

let value: ChangeOrganizationStatusResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    tokenSupply: 3529.93,
    usdcSupply: 5669.45,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `success`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `data`                    | *components.Organization* | :heavy_minus_sign:        | N/A                       |