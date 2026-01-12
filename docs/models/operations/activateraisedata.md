# ActivateRaiseData

## Example Usage

```typescript
import { ActivateRaiseData } from "@archdao/archdao-client/models/operations/activateraise.js";

let value: ActivateRaiseData = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `image`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `banner`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.OrganizationType](../../models/components/organizationtype.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.OrganizationStatus](../../models/components/organizationstatus.md)                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `links`                                                                                       | [components.Link](../../models/components/link.md)[]                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contactInformation`                                                                          | [components.ContactInformation](../../models/components/contactinformation.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `token`                                                                                       | [components.Token](../../models/components/token.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `treasury`                                                                                    | [components.Treasury](../../models/components/treasury.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raise`                                                                                       | [components.Raise](../../models/components/raise.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |