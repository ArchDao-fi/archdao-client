# GetOrganizationResponseBody

Success response wrapper

## Example Usage

```typescript
import { GetOrganizationResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetOrganizationResponseBody = {
  success: false,
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.OrganizationDetail](../../models/components/organizationdetail.md) | :heavy_minus_sign:                                                             | N/A                                                                            |