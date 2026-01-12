# GetOrganizationResponseBody

OK

## Example Usage

```typescript
import { GetOrganizationResponseBody } from "@archdao/archdao-client/models/operations";

let value: GetOrganizationResponseBody = {
  data: {
    id: 607038,
    type: "external",
    name: "<value>",
    slug: "<value>",
    description: "following joyfully round fax",
    status: "raise",
    userId: 751956,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |