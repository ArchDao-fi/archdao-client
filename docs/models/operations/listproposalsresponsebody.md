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
| `data`                                                         | [components.Proposal](../../models/components/proposal.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |