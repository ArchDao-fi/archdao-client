# GetOrganizationData


## Supported Types

### `operations.DataExternalOrganization`

```typescript
const value: operations.DataExternalOrganization = {
  token: {
    name: "Example Token",
    symbol: "EXT",
    address: "0x1234...abcd",
    supply: 1000000000,
  },
  tokenSupply: 5055.45,
  usdcSupply: 272.68,
  user: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
  proposals: [],
};
```

### `operations.DataIcoOrganization`

```typescript
const value: operations.DataIcoOrganization = {
  raise: {},
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
  proposals: [],
};
```

