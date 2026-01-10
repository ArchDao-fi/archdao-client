# CancelProposalResponseBody

Proposal cancelled

## Example Usage

```typescript
import { CancelProposalResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: CancelProposalResponseBody = {
  success: true,
  data: {
    status: "cancelled",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `data`                                                                         | [operations.CancelProposalData](../../models/operations/cancelproposaldata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |