<!-- Start SDK Example Usage [usage] -->
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.auth.createNonce({
    address: "<wallet_address>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->