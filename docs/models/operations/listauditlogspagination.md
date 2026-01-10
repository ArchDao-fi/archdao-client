# ListAuditLogsPagination

## Example Usage

```typescript
import { ListAuditLogsPagination } from "@draft/archdao-api-typescript/models/operations";

let value: ListAuditLogsPagination = {
  page: 1,
  pageSize: 20,
  totalItems: 100,
  totalPages: 5,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_check_mark: | N/A                | 1                  |
| `pageSize`         | *number*           | :heavy_check_mark: | N/A                | 20                 |
| `totalItems`       | *number*           | :heavy_check_mark: | N/A                | 100                |
| `totalPages`       | *number*           | :heavy_check_mark: | N/A                | 5                  |