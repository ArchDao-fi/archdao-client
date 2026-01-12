# GetOrganizationResponseBody

Success response wrapper

## Example Usage

```typescript
import { GetOrganizationResponseBody } from "@archdao/archdao-client/models/operations/getorganization.js";

let value: GetOrganizationResponseBody = {
  data: {
    type: "ico",
    name: "<value>",
    description: "teriyaki although aching excitedly closely",
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
    proposals: [
      {
        organizationId: 488146,
        title: "<value>",
        description: "upbeat serenade wherever lazily refute",
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |