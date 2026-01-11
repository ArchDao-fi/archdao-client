# CreateNonceResponseBody

Success response wrapper

## Example Usage

```typescript
import { CreateNonceResponseBody } from "@archdao/archdao-client/models/operations";

let value: CreateNonceResponseBody = {
  success: true,
  data: {
    nonce: 1704067200000,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_minus_sign:                                 | N/A                                                |