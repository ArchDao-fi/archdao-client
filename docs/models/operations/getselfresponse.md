# GetSelfResponse


## Supported Types

### `operations.GetSelfResponseBody`

```typescript
const value: operations.GetSelfResponseBody = {
  success: true,
  data: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
    nonces: [
      {
        nonce: 1704067200000,
        userAgent: "Mozilla/5.0...",
        ipAddress: "192.168.1.1",
      },
    ],
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

