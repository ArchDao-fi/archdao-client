# LoginResponseBody

Login successful

## Example Usage

```typescript
import { LoginResponseBody } from "@archdao/archdao-client/models/operations";

let value: LoginResponseBody = {
  data: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [operations.LoginData](../../models/operations/logindata.md) | :heavy_check_mark:                                           | N/A                                                          |