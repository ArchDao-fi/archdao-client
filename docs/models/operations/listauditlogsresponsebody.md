# ListAuditLogsResponseBody

OK

## Example Usage

```typescript
import { ListAuditLogsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListAuditLogsResponseBody = {
  data: [
    {
      id: 940043,
      user: {
        id: 590869,
        address: "7518 Tanya Prairie",
        name: "<value>",
        role: "user",
      },
      action: "role_change",
      targetType: "proposal",
      targetId: 699435,
      created: new Date("2025-11-30T05:35:37.189Z"),
    },
  ],
  pagination: {
    page: 971887,
    limit: 693437,
    total: 769659,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.AuditLog](../../models/components/auditlog.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |