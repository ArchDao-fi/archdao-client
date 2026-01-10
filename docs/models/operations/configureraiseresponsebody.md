# ConfigureRaiseResponseBody

Raise configured

## Example Usage

```typescript
import { ConfigureRaiseResponseBody } from "@draft/archdao-api-typescript/models/operations";

let value: ConfigureRaiseResponseBody = {
  success: true,
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    user: {
      id: 1,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      name: "0x1234...5678",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `success`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  | true                                                                                 |
| `data`                                                                               | [components.OrganizationWithRaise](../../models/components/organizationwithraise.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |