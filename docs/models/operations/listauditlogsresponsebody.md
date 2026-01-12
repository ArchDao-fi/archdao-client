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
        created: new Date("2024-01-25T08:32:57.064Z"),
        updated: new Date("2025-09-07T08:36:03.519Z"),
      },
      action: "raise_edit",
      targetType: "proposal",
      targetId: 197552,
      created: new Date("2024-05-13T14:26:01.391Z"),
    },
  ],
  pagination: {
    page: 769659,
    limit: 367168,
    total: 914445,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.AuditLog](../../models/components/auditlog.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |