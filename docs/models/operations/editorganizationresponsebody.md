# EditOrganizationResponseBody

Success response wrapper

## Example Usage

```typescript
import { EditOrganizationResponseBody } from "@archdao/archdao-client/models/operations/editorganization.js";

let value: EditOrganizationResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    tokenSupply: 424.98,
    usdcSupply: 3112.56,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `success`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `data`                    | *components.Organization* | :heavy_minus_sign:        | N/A                       |