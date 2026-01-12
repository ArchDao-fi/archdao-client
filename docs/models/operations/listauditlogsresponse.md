# ListAuditLogsResponse


## Supported Types

### `operations.ListAuditLogsResponseBody`

```typescript
const value: operations.ListAuditLogsResponseBody = {
  data: [
    {
      user: {
        id: 1,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        name: "0x1234...5678",
      },
    },
  ],
  pagination: {
    total: 100,
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

