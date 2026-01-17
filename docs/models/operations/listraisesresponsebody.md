# ListRaisesResponseBody

OK

## Example Usage

```typescript
import { ListRaisesResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListRaisesResponseBody = {
  data: [
    {
      id: 867,
      organizationId: 390115,
      softCap: 6441.88,
      status: "completed",
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.Raise](../../models/components/raise.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |