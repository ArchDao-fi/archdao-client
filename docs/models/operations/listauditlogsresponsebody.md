# ListAuditLogsResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListAuditLogsResponseBody } from "@archdao/archdao-client/models/operations/listauditlogs.js";

let value: ListAuditLogsResponseBody = {
  data: [
    {
      id: 940043,
      user: {
        id: 1,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        name: "0x1234...5678",
      },
      action: "org_edit",
      targetType: "proposal",
      targetId: 699885,
      created: new Date("2025-10-15T16:18:39.583Z"),
    },
  ],
  pagination: {
    total: 100,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.AuditLog](../../models/components/auditlog.md)[]                                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [components.Pagination](../../models/components/pagination.md)                                         | :heavy_check_mark:                                                                                     | Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses. |