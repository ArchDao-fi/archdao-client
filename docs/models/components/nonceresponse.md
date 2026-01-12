# NonceResponse

Success response wrapper

## Example Usage

```typescript
import { NonceResponse } from "@archdao/archdao-client/models/components/nonceresponse.js";

let value: NonceResponse = {
  data: {
    nonce: 1704067200000,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |