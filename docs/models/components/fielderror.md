# FieldError

## Example Usage

```typescript
import { FieldError } from "@archdao/archdao-client/models/components/fielderror.js";

let value: FieldError = {
  field: "name",
  message: "Name is required",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `field`            | *string*           | :heavy_check_mark: | N/A                | name               |
| `message`          | *string*           | :heavy_check_mark: | N/A                | Name is required   |