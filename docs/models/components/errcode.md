# ErrCode

All error codes that can be returned from the backend

## Example Usage

```typescript
import { ErrCode } from "@archdao/archdao-client/models/components";

let value: ErrCode = "PROPOSAL_NOT_FOUND";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "VALIDATION_ERROR" | "INVALID_SIGNATURE" | "INVALID_ACTION_DATA" | "EMPTY_ACTIONS" | "INVALID_STATUS_TRANSITION" | "INVALID_ORG_TYPE" | "INSUFFICIENT_TOKEN_BALANCE" | "INVALID_TOKEN" | "EXPIRED_TOKEN" | "INACTIVE_NONCE" | "NOT_AUTHORIZED" | "USER_NOT_FOUND" | "NONCE_NOT_FOUND" | "ORGANIZATION_NOT_FOUND" | "PROPOSAL_NOT_FOUND" | "RAISE_NOT_FOUND" | "PROPOSAL_ALREADY_ACTIVE"
```