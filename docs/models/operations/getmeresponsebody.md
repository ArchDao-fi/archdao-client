# GetMeResponseBody

User info retrieved

## Example Usage

```typescript
import { GetMeResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetMeResponseBody = {
  success: true,
  data: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
    nonces: [
      {
        nonce: 1704067200000,
        userAgent: "Mozilla/5.0...",
        ipAddress: "192.168.1.1",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    | true                                                                   |
| `data`                                                                 | [components.UserWithNonces](../../models/components/userwithnonces.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |