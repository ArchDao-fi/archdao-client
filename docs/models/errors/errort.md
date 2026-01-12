# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@archdao/archdao-client/models/errors";

let value: ErrorT = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `code`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `message`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `fields`                                         | [errors.Fields](../../models/errors/fields.md)[] | :heavy_minus_sign:                               | N/A                                              |