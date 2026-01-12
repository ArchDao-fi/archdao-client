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
    created: new Date("2026-07-24T00:25:24.486Z"),
    updated: new Date("2026-12-02T12:44:33.761Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | N/A                                                                |