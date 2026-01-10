# Token

## Example Usage

```typescript
import { Token } from "@draft/archdao-api-typescript/models/components";

let value: Token = {
  name: "Example Token",
  symbol: "EXT",
  address: "0x1234...abcd",
  supply: 1000000000,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                |                    |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | Example Token      |
| `symbol`           | *string*           | :heavy_minus_sign: | N/A                | EXT                |
| `address`          | *string*           | :heavy_minus_sign: | N/A                | 0x1234...abcd      |
| `supply`           | *number*           | :heavy_minus_sign: | N/A                | 1000000000         |