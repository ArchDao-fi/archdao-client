# ProposalAction

## Example Usage

```typescript
import { ProposalAction } from "@archdao/archdao-client/models/components/proposalaction.js";

let value: ProposalAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `actionType`                                                                                  | [components.ActionType](../../models/components/actiontype.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `actionData`                                                                                  | [components.ActionData](../../models/components/actiondata.md)                                | :heavy_minus_sign:                                                                            | Type-specific parameters for the action                                                       |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |