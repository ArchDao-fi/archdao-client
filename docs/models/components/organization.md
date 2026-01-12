# Organization


## Supported Types

### `components.ExternalOrganization`

```typescript
const value: components.ExternalOrganization = {
  token: {
    name: "Example Token",
    symbol: "EXT",
    address: "0x1234...abcd",
    supply: 1000000000,
  },
  tokenSupply: 1187.47,
  usdcSupply: 4150.62,
  user: {
    id: 1,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
};
```

### `components.IcoOrganization`

```typescript
const value: components.IcoOrganization = {
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
};
```

