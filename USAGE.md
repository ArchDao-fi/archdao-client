<!-- Start SDK Example Usage [usage] -->
```typescript
import { Archdao } from "@archdao/archdao-client";

const archdao = new Archdao({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await archdao.authentication.getNonce({
    address: "0x1234567890abcdef1234567890abcdef12345678",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->