# UserWithNoncesResponse

Success response wrapper

## Example Usage

```typescript
import { UserWithNoncesResponse } from "@archdao/archdao-client/models/components";

let value: UserWithNoncesResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.UserWithNonces](../../models/components/userwithnonces.md) | :heavy_check_mark:                                                     | N/A                                                                    |