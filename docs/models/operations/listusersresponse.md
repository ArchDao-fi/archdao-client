# ListUsersResponse


## Supported Types

### `operations.ListUsersResponseBody`

```typescript
const value: operations.ListUsersResponseBody = {
  success: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
  data: [
    {
      id: 1,
      address: "0x1234567890abcdef1234567890abcdef12345678",
      name: "0x1234...5678",
    },
  ],
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

