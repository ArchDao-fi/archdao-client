# ProposalActionUpdateMetadataAction

## Example Usage

```typescript
import { ProposalActionUpdateMetadataAction } from "@archdao/archdao-client/models/components/proposalaction.js";

let value: ProposalActionUpdateMetadataAction = {
  uri: "https://self-assured-yeast.info/",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `actionType`          | *string*              | :heavy_check_mark:    | N/A                   |
| `uri`                 | *string*              | :heavy_check_mark:    | Valid IPFS CID or URL |
| `order`               | *number*              | :heavy_minus_sign:    | N/A                   |