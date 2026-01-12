# ProposalStake

## Example Usage

```typescript
import { ProposalStake } from "@archdao/archdao-client/models/components";

let value: ProposalStake = {
  id: 180658,
  user: {
    id: 991987,
    address: "77223 Moore Cove",
    name: "<value>",
  },
  amount: 3872.89,
  created: new Date("2025-03-13T17:35:51.443Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.ProposalStakeUser](../../models/components/proposalstakeuser.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |