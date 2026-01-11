# ListAuditLogsResponseBody

Audit logs retrieved

## Example Usage

```typescript
import { ListAuditLogsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListAuditLogsResponseBody = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
  data: [
    {
      user: {
        id: 1,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        name: "0x1234...5678",
      },
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `success`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      | true                                                                                     |
| `pagination`                                                                             | [operations.ListAuditLogsPagination](../../models/operations/listauditlogspagination.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `data`                                                                                   | [components.AuditLog](../../models/components/auditlog.md)[]                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |