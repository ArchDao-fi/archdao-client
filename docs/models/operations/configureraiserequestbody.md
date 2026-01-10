# ConfigureRaiseRequestBody

## Example Usage

```typescript
import { ConfigureRaiseRequestBody } from "@draft/archdao-api-typescript/models/operations";

let value: ConfigureRaiseRequestBody = {
  startDate: new Date("2024-11-23T01:24:02.050Z"),
  endDate: new Date("2026-07-13T02:05:14.023Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Raise start date (must be in future)                                                          |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Raise end date (must be after startDate)                                                      |