# UpdateRaiseResponseBody

Updated

## Example Usage

```typescript
import { UpdateRaiseResponseBody } from "@archdao/archdao-client/models/operations";

let value: UpdateRaiseResponseBody = {
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