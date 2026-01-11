# GetNonceResponseBody

Nonce generated successfully

## Example Usage

```typescript
import { GetNonceResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetNonceResponseBody = {
  success: true,
  data: {
    nonce: 1704067200000,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                | true                                               |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_minus_sign:                                 | N/A                                                |                                                    |