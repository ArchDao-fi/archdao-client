# ChangeOrganizationStatusRequestBody

## Example Usage

```typescript
import { ChangeOrganizationStatusRequestBody } from "@draft/archdao-api-typescript/models/operations";

let value: ChangeOrganizationStatusRequestBody = {
  status: "raise",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `status`                                                                       | [components.OrganizationStatus](../../models/components/organizationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `reason`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Optional reason for status change                                              |