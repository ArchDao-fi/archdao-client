# GetOrganizationResponseBody

Success response wrapper

## Example Usage

```typescript
import { GetOrganizationResponseBody } from "@archdao/archdao-client/models/operations/getorganization.js";

let value: GetOrganizationResponseBody = {
  data: {
    raise: {},
    proposals: [],
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `success`                        | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `data`                           | *operations.GetOrganizationData* | :heavy_check_mark:               | N/A                              |