# ChangeUserRoleResponse


## Supported Types

### `operations.ChangeUserRoleResponseBody`

```typescript
const value: operations.ChangeUserRoleResponseBody = {
  success: false,
  data: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
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

