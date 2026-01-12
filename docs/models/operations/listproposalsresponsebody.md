# ListProposalsResponseBody

OK

## Example Usage

```typescript
import { ListProposalsResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListProposalsResponseBody = {
  data: [
    {
      id: 730834,
      organizationId: 474321,
      userId: 121003,
      title: "<value>",
      description:
        "pfft colour after chainstay shipper punctually pant but hence",
      status: "draft",
      created: new Date("2024-07-25T15:12:26.953Z"),
      updated: new Date("2024-07-03T10:40:56.848Z"),
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.Proposal](../../models/components/proposal.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |