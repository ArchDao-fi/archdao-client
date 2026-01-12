# ProposalStake

## Example Usage

```typescript
import { ProposalStake } from "@archdao/archdao-client/models/components/proposalstake.js";

let value: ProposalStake = {
  id: 180658,
  user: {
    id: 387289,
    address: "2114 Queen's Road",
    name: "<value>",
  },
  amount: 7954,
  created: new Date("2024-01-01T11:06:16.981Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.ProposalStakeUser](../../models/components/proposalstakeuser.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |