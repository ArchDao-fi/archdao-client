# LoginResponse


## Supported Types

### `operations.LoginResponseBody`

```typescript
const value: operations.LoginResponseBody = {
  data: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
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

