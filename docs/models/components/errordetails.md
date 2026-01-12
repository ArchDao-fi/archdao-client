# ErrorDetails

Error details with code, message, and optional field errors

## Example Usage

```typescript
import { ErrorDetails } from "@archdao/archdao-client/models/components";

let value: ErrorDetails = {
  code: "PROPOSAL_ALREADY_ACTIVE",
  message: "<value>",
  fields: [
    {
      field: "name",
      message: "Name is required",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `code`                                                            | [components.ErrCode](../../models/components/errcode.md)          | :heavy_check_mark:                                                | All error codes that can be returned from the backend             |
| `message`                                                         | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `fields`                                                          | [components.FieldError](../../models/components/fielderror.md)[]  | :heavy_minus_sign:                                                | Field-level validation errors (only present for VALIDATION_ERROR) |