# CancelProposalResponseBody

Success response wrapper

## Example Usage

```typescript
import { CancelProposalResponseBody } from "@archdao/archdao-client/models/operations/cancelproposal.js";

let value: CancelProposalResponseBody = {
  success: false,
  data: {
    status: "cancelled",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.CancelProposalData](../../models/operations/cancelproposaldata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |