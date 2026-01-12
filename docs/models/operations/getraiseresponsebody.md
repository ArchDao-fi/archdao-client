# GetRaiseResponseBody

OK

## Example Usage

```typescript
import { GetRaiseResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetRaiseResponseBody = {
  data: {
    id: 661742,
    organizationId: 508568,
    softCap: 4917.22,
    status: "finalizing",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `success`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `data`                                               | [components.Raise](../../models/components/raise.md) | :heavy_check_mark:                                   | N/A                                                  |