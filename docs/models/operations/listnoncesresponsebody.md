# ListNoncesResponseBody

OK

## Example Usage

```typescript
import { ListNoncesResponseBody } from "@archdao/archdao-client/models/operations";

let value: ListNoncesResponseBody = {
  data: [
    {
      nonce: 368015,
      userAgent: "<value>",
      ipAddress: "22.59.181.122",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [components.Nonce](../../models/components/nonce.md)[] | :heavy_check_mark:                                     | N/A                                                    |