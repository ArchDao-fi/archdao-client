# CreateOrganizationRequestBody


## Supported Types

### `operations.ExternalOrganization`

```typescript
const value: operations.ExternalOrganization = {
  token: {
    name: "Example Token",
    symbol: "EXT",
    address: "0x1234...abcd",
    supply: 1000000000,
  },
  tokenSupply: 8378.08,
  usdcSupply: 512.4,
  name: "<value>",
  image: await openAsBlob("example.file"),
  description:
    "dulcimer gratefully tense ah lender meanwhile closely old-fashioned",
  contactInformation: [
    {},
  ],
  user: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
};
```

### `operations.IcoOrganization`

```typescript
const value: operations.IcoOrganization = {
  raise: {},
  name: "<value>",
  image: await openAsBlob("example.file"),
  description: "pear expensive before ah terribly zowie excluding meanwhile",
  contactInformation: [],
  token: {
    name: "Example Token",
    symbol: "EXT",
    address: "0x1234...abcd",
    supply: 1000000000,
  },
  user: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "0x1234...5678",
  },
};
```

