# Treasury

## Example Usage

```typescript
import { Treasury } from "@archdao/archdao-client/models/operations/createorganization.js";

let value: Treasury = {
  tokenSupply: 8630.05,
  usdcSupply: 3541.02,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `tokenSupply`                | *number*                     | :heavy_check_mark:           | Token supply for treasury LP |
| `usdcSupply`                 | *number*                     | :heavy_check_mark:           | USDC supply for treasury LP  |