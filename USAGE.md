<!-- Start SDK Example Usage [usage] -->
```typescript
import { ArchdaoApiTypescript } from "@draft/archdao-api-typescript";

const archdaoApiTypescript = new ArchdaoApiTypescript({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdaoApiTypescript.authentication.getNonce({
    address: "0x1234567890abcdef1234567890abcdef12345678",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->