# CreateOrganizationResponseBody

Organization created

## Example Usage

```typescript
import { CreateOrganizationResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: CreateOrganizationResponseBody = {
  success: true,
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                | true                                                               |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |