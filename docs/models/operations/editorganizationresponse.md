# EditOrganizationResponse


## Supported Types

### `operations.EditOrganizationResponseBody`

```typescript
const value: operations.EditOrganizationResponseBody = {
  data: {
    token: {
      name: "Example Token",
      symbol: "EXT",
      address: "0x1234...abcd",
      supply: 1000000000,
    },
    tokenSupply: 424.98,
    usdcSupply: 3112.56,
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

