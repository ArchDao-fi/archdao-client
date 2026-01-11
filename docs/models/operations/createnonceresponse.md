# CreateNonceResponse


## Supported Types

### `operations.CreateNonceResponseBody`

```typescript
const value: operations.CreateNonceResponseBody = {
  success: true,
  data: {
    nonce: 1704067200000,
  },
};
```

### `components.Err`

```typescript
const value: components.Err = {
  success: false,
  error: {
    code: "INVALID_TOKEN",
    message: "<value>",
    fields: [
      {
        field: "name",
        message: "Name is required",
      },
    ],
  },
};
```

