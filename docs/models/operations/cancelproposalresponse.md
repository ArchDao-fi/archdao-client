# CancelProposalResponse


## Supported Types

### `operations.CancelProposalResponseBody`

```typescript
const value: operations.CancelProposalResponseBody = {
  success: false,
  data: {
    status: "cancelled",
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

