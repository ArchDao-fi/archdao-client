# ListOrganizationsResponseBody

Organizations retrieved

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: ListOrganizationsResponseBody = {
  success: true,
  pagination: {
    page: 1,
    pageSize: 20,
    totalItems: 100,
    totalPages: 5,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                | true                                                                               |
| `pagination`                                                                       | [operations.Pagination](../../models/operations/pagination.md)                     | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `data`                                                                             | [components.OrganizationSummary](../../models/components/organizationsummary.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |