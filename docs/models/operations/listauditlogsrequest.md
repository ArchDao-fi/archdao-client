# ListAuditLogsRequest

## Example Usage

```typescript
import { ListAuditLogsRequest } from "@archdao/archdao-client/models/operations";

let value: ListAuditLogsRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `page`                                                           | *number*                                                         | :heavy_minus_sign:                                               | Page number (1-indexed)                                          |
| `limit`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Items per page                                                   |
| `action`                                                         | [components.AuditAction](../../models/components/auditaction.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `targetType`                                                     | [components.TargetType](../../models/components/targettype.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `userId`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Filter by admin who performed the action                         |