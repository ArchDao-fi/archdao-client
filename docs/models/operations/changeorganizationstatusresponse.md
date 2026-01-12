# ChangeOrganizationStatusResponse


## Supported Types

### `operations.ChangeOrganizationStatusResponseBody`

```typescript
const value: operations.ChangeOrganizationStatusResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    tokenSupply: 3529.93,
    usdcSupply: 5669.45,
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

