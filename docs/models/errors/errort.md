# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@draft/archdao-api-typescript/models/errors";

let value: ErrorT = {
  code: "VALIDATION_ERROR",
  message: "One or more fields failed validation.",
  fields: [
    {
      field: "name",
      message: "Name is required",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `code`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | VALIDATION_ERROR                                                 |
| `message`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | One or more fields failed validation.                            |
| `fields`                                                         | [components.FieldError](../../models/components/fielderror.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |