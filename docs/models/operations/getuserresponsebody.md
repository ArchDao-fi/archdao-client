# GetUserResponseBody

OK

## Example Usage

```typescript
import { GetUserResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetUserResponseBody = {
  data: {
    id: 531741,
    address: "25723 Hickle Light",
    name: "<value>",
    role: "user",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.User](../../models/components/user.md) | :heavy_check_mark:                                 | N/A                                                |