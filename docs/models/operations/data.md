# Data

## Example Usage

```typescript
import { Data } from "@archdao/archdao-client/models/operations/getorganization.js";

let value: Data = {
  type: "ico",
  name: "<value>",
  description:
    "loudly powerless wedge recount sardonic mockingly undergo shred",
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
  proposals: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.Type](../../models/operations/type.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `image`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `banner`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.OrganizationStatus](../../models/components/organizationstatus.md)                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `links`                                                                                       | [components.Link](../../models/components/link.md)[]                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contactInformation`                                                                          | [components.ContactInformation](../../models/components/contactinformation.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `token`                                                                                       | [components.Token](../../models/components/token.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `treasury`                                                                                    | [components.Treasury](../../models/components/treasury.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raise`                                                                                       | [operations.RaiseRaise](../../models/operations/raiseraise.md)                                | :heavy_minus_sign:                                                                            | Only present for ICO organizations                                                            |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proposals`                                                                                   | [components.Proposal](../../models/components/proposal.md)[]                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |