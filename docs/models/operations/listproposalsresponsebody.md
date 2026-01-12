# ListProposalsResponseBody

Success response wrapper

## Example Usage

```typescript
import { ListProposalsResponseBody } from "@archdao/archdao-client/models/operations/listproposals.js";

let value: ListProposalsResponseBody = {
  data: [
    {
      organizationId: 730834,
      title: "<value>",
      description: "even modulo oh ha achieve phooey",
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