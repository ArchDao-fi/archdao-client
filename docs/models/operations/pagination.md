# Pagination

## Example Usage

```typescript
import { Pagination } from "@archdao/archdao-client/models/operations/listorganizations.js";

let value: Pagination = {
  page: 1,
  limit: 20,
  total: 100,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_check_mark: | N/A                | 1                  |
| `limit`            | *number*           | :heavy_check_mark: | N/A                | 20                 |
| `total`            | *number*           | :heavy_check_mark: | N/A                | 100                |