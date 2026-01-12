# Actions

## Example Usage

```typescript
import { Actions } from "@archdao/archdao-client/models/components/createproposalrequest.js";

let value: Actions = {
  actionType: "treasury_spend",
  actionData: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `actionType`                                                                                             | [components.ActionType](../../models/components/actiontype.md)                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `actionData`                                                                                             | [components.CreateProposalRequestActionData](../../models/components/createproposalrequestactiondata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |