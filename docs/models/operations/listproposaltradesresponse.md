# ListProposalTradesResponse


## Supported Types

### `operations.ListProposalTradesResponseBody`

```typescript
const value: operations.ListProposalTradesResponseBody = {
  success: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
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

