# AuditLog

## Example Usage

```typescript
import { AuditLog } from "@archdao/archdao-client/models/components";

let value: AuditLog = {
  id: 283781,
  user: {
    id: 590869,
    address: "7518 Tanya Prairie",
    name: "<value>",
    role: "user",
    created: new Date("2024-01-25T08:32:57.064Z"),
    updated: new Date("2025-09-07T08:36:03.519Z"),
  },
  action: "role_change",
  targetType: "user",
  targetId: 211449,
  created: new Date("2025-07-20T23:51:25.842Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `action`                                                                                      | [components.AuditAction](../../models/components/auditaction.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetType`                                                                                  | [components.TargetType](../../models/components/targettype.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetId`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `before`                                                                                      | [components.Before](../../models/components/before.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `after`                                                                                       | [components.After](../../models/components/after.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |