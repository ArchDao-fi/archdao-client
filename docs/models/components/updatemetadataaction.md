# UpdateMetadataAction

## Example Usage

```typescript
import { UpdateMetadataAction } from "@archdao/archdao-client/models/components";

let value: UpdateMetadataAction = {
  uri: "https://cheerful-unibody.biz",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uri`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Valid IPFS CID or URL                                                                         |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposalId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |