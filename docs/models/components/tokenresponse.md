# TokenResponse

Success response wrapper

## Example Usage

```typescript
import { TokenResponse } from "@archdao/archdao-client/models/components";

let value: TokenResponse = {
  data: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.TokenResponseData](../../models/components/tokenresponsedata.md) | :heavy_check_mark:                                                           | N/A                                                                          |