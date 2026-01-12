# ListOrganizationsResponseBody

OK

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListOrganizationsResponseBody = {
  data: [
    {
      id: 343059,
      type: "ico",
      name: "<value>",
      slug: "<value>",
      description: "phew instead dreary how under hence if who the",
      status: "active",
      userId: 131839,
      created: new Date("2026-01-07T18:14:23.834Z"),
      updated: new Date("2025-01-23T00:02:51.708Z"),
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |