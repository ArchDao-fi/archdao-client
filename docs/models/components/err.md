# Err

Error response returned when an operation fails

## Example Usage

```typescript
import { Err } from "@archdao/archdao-client/models/components/err.js";

let value: Err = {
  error: {
    code: "NOT_AUTHORIZED",
    message: "<value>",
    fields: [
      {
        field: "name",
        message: "Name is required",
      },
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `error`                                                | [components.ErrorT](../../models/components/errort.md) | :heavy_check_mark:                                     | N/A                                                    |