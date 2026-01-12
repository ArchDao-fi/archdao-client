# ChangeUserRoleResponseBody

Updated

## Example Usage

```typescript
import { ChangeUserRoleResponseBody } from "@archdao/archdao-client/models/operations";

let value: ChangeUserRoleResponseBody = {
  data: {
    id: 531741,
    address: "25723 Hickle Light",
    name: "<value>",
    role: "user",
    created: new Date("2026-08-08T12:32:48.391Z"),
    updated: new Date("2025-01-12T21:37:15.871Z"),
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.User](../../models/components/user.md) | :heavy_check_mark:                                 | N/A                                                |