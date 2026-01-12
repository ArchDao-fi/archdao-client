# UserWithNonces

## Example Usage

```typescript
import { UserWithNonces } from "@archdao/archdao-client/models/components";

let value: UserWithNonces = {
  id: 1,
  address: "0x1234567890abcdef1234567890abcdef12345678",
  name: "0x1234...5678",
  nonces: [
    {
      nonce: 1704067200000,
      userAgent: "<user-agent>",
      ipAddress: "<client-ip>",
      created: new Date("2025-12-07T13:53:56.808Z"),
      updated: new Date("2024-12-28T04:45:34.897Z"),
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `address`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 0x1234567890abcdef1234567890abcdef12345678                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 0x1234...5678                                                                                 |
| `role`                                                                                        | [components.UserRole](../../models/components/userrole.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `nonces`                                                                                      | [components.Nonce](../../models/components/nonce.md)[]                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |