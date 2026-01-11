# ListOrganizationsResponseBody

Organizations retrieved

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListOrganizationsResponseBody = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                | true                                                                               |
| `pagination`                                                                       | [operations.Pagination](../../models/operations/pagination.md)                     | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `data`                                                                             | [components.OrganizationSummary](../../models/components/organizationsummary.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |