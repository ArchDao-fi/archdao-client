# ListOrganizationsRequest

## Example Usage

```typescript
import { ListOrganizationsRequest } from "@archdao/archdao-client/models/operations";

let value: ListOrganizationsRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page`                                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | Page number (1-indexed)                                                        |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Items per page                                                                 |
| `status`                                                                       | [components.OrganizationStatus](../../models/components/organizationstatus.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `search`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Search by name or description                                                  |