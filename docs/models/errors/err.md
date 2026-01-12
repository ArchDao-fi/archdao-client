# Err

Error response returned when an operation fails

## Example Usage

```typescript
import { Err } from "@archdao/archdao-client/models/errors/err.js";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `error`                                                            | [components.ErrorDetails](../../models/components/errordetails.md) | :heavy_check_mark:                                                 | Error details with code, message, and optional field errors        |