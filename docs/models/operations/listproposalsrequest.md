# ListProposalsRequest

## Example Usage

```typescript
import { ListProposalsRequest } from "@draft/archdao-api-typescript/models/operations";

let value: ListProposalsRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `page`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | Page number (1-indexed)                                                |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Items per page                                                         |
| `status`                                                               | [components.ProposalStatus](../../models/components/proposalstatus.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `organizationId`                                                       | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |