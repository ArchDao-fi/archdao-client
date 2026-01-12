# GetOrganizationData


## Supported Types

### `operations.IcoOrganization`

```typescript
const value: operations.IcoOrganization = {
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
  proposals: [
    {
      organizationId: 627088,
      title: "<value>",
      description: "patiently whoa until",
    },
  ],
};
```

### `operations.ExternalOrganization`

```typescript
const value: operations.ExternalOrganization = {
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

