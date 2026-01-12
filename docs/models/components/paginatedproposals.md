# PaginatedProposals

Success response wrapper

## Example Usage

```typescript
import { PaginatedProposals } from "@archdao/archdao-client/models/components";

let value: PaginatedProposals = {
  data: [
    {
      organizationId: 4902,
      title: "<value>",
      description: "indelible crazy ack ugh",
    },
  ],
  pagination: {
    total: 100,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.Proposal](../../models/components/proposal.md)[]                                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [components.Pagination](../../models/components/pagination.md)                                         | :heavy_check_mark:                                                                                     | Pagination parameters for list endpoints. Use page/limit for requests, total is returned in responses. |