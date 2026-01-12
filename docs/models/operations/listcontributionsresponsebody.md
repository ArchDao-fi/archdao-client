# ListContributionsResponseBody

OK

## Example Usage

```typescript
import { ListContributionsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListContributionsResponseBody = {
  data: [],
  pagination: {
    page: 769659,
    limit: 367168,
    total: 914445,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.RaiseContribution](../../models/components/raisecontribution.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `pagination`                                                                   | [components.Pagination](../../models/components/pagination.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |