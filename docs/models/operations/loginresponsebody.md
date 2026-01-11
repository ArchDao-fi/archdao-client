# LoginResponseBody

Success response wrapper

## Example Usage

```typescript
import { LoginResponseBody } from "@archdao/archdao-client/models/operations/login.js";

let value: LoginResponseBody = {
  success: true,
  data: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [operations.LoginData](../../models/operations/logindata.md) | :heavy_minus_sign:                                           | N/A                                                          |