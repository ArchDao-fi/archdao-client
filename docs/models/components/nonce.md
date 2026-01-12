# Nonce

## Example Usage

```typescript
import { Nonce } from "@archdao/archdao-client/models/components/nonce.js";

let value: Nonce = {
  nonce: 1704067200000,
  userAgent: "<user-agent>",
  ipAddress: "<client-ip>",
  created: new Date("2026-05-25T21:16:48.149Z"),
  updated: new Date("2024-03-22T08:22:05.080Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `nonce`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1704067200000                                                                                 |
| `userAgent`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | <user-agent>                                                                                  |
| `ipAddress`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | <client-ip>                                                                                   |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |