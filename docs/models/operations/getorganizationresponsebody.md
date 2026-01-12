# GetOrganizationResponseBody

Success response wrapper

## Example Usage

```typescript
import { GetOrganizationResponseBody } from "@archdao/archdao-client/models/operations/getorganization.js";

let value: GetOrganizationResponseBody = {
  data: {
    type: "ico",
    name: "<value>",
    description: "teriyaki although aching excitedly closely",
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
    proposals: [
      {
        organizationId: 497244,
        title: "<value>",
        description: "supposing chatter bashfully popularity fondly compete",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [operations.GetOrganizationData](../../models/operations/getorganizationdata.md) | :heavy_check_mark:                                                               | N/A                                                                              |