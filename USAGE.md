<!-- Start SDK Example Usage [usage] -->
```typescript
import { ArchDAO } from "@archdao/archdao-client";

const archDAO = new ArchDAO();

async function run() {
  const result = await archDAO.authentication.createNonce({
    address: "0x1234567890abcdef1234567890abcdef12345678",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->