# CreateProposalRequest

## Example Usage

```typescript
import { CreateProposalRequest } from "@archdao/archdao-client/models/components";

let value: CreateProposalRequest = {
  organizationId: 204930,
  title: "<value>",
  description:
    "down confute absolve blushing sans evenly on premier flickering swiftly",
  actions: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `organizationId`                                           | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `title`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `description`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `actions`                                                  | [components.Actions](../../models/components/actions.md)[] | :heavy_check_mark:                                         | N/A                                                        |