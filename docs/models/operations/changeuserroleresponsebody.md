# ChangeUserRoleResponseBody

Success response wrapper

## Example Usage

```typescript
import { ChangeUserRoleResponseBody } from "@archdao/archdao-client/models/operations";

let value: ChangeUserRoleResponseBody = {
  success: false,
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
| `data`                                             | [components.User](../../models/components/user.md) | :heavy_minus_sign:                                 | N/A                                                |