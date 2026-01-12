# Pagination

Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses.

## Example Usage

```typescript
import { Pagination } from "@archdao/archdao-client/models/components/pagination.js";

let value: Pagination = {
  total: 100,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `page`                                | *number*                              | :heavy_minus_sign:                    | Page number (1-indexed)               | 1                                     |
| `limit`                               | *number*                              | :heavy_minus_sign:                    | Items per page                        | 20                                    |
| `total`                               | *number*                              | :heavy_minus_sign:                    | Total number of items (response only) | 100                                   |