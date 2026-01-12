# CreateProposal

## Example Usage

```typescript
import { CreateProposal } from "@archdao/archdao-client/models/components";

let value: CreateProposal = {
  organizationId: 423011,
  title: "<value>",
  description: "watery of openly upon bleakly where",
  actions: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `organizationId`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `actions`                                                                | [components.ProposalAction](../../models/components/proposalaction.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |