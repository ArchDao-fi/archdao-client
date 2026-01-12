# TokenRequest

## Example Usage

```typescript
import { TokenRequest } from "@archdao/archdao-client/models/components/tokenrequest.js";

let value: TokenRequest = {
  name: "Example Token",
  symbol: "EXT",
  address: "0x1234...abcd",
  supply: 1000000000,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | Example Token      |
| `symbol`           | *string*           | :heavy_minus_sign: | N/A                | EXT                |
| `address`          | *string*           | :heavy_minus_sign: | N/A                | 0x1234...abcd      |
| `supply`           | *number*           | :heavy_minus_sign: | N/A                | 1000000000         |