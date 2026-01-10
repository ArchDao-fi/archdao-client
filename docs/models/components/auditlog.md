# AuditLog

## Example Usage

```typescript
import { AuditLog } from "@draft/archdao-api-typescript/models/components";

let value: AuditLog = {
  user: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `action`                                                                                      | [components.AuditAction](../../models/components/auditaction.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetType`                                                                                  | [components.TargetType](../../models/components/targettype.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetId`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `before`                                                                                      | [components.Before](../../models/components/before.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `after`                                                                                       | [components.After](../../models/components/after.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |