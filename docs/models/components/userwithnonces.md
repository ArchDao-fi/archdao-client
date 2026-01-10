# UserWithNonces

## Example Usage

```typescript
import { UserWithNonces } from "@draft/archdao-api-typescript/models/components";

let value: UserWithNonces = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `address`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 0x1234567890abcdef1234567890abcdef12345678                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 0x1234...5678                                                                                 |
| `role`                                                                                        | [components.UserRole](../../models/components/userrole.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `nonces`                                                                                      | [components.Nonce](../../models/components/nonce.md)[]                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |