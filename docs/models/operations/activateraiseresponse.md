# ActivateRaiseResponse


## Supported Types

### `operations.ActivateRaiseResponseBody`

```typescript
const value: operations.ActivateRaiseResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    user: {
      id: 1,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      name: "0x1234...5678",
    },
  },
};
```

### `components.Err`

```typescript
const value: components.Err = {
  error: {
    code: "NOT_AUTHORIZED",
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

