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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |