# UserResponse

Success response wrapper

## Example Usage

```typescript
import { UserResponse } from "@archdao/archdao-client/models/components/userresponse.js";

let value: UserResponse = {
  data: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.User](../../models/components/user.md) | :heavy_check_mark:                                 | N/A                                                |