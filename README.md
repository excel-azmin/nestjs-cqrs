
# NESTJS CQRS EXAMPLE

```
src/
├── commands/
│   ├── create-purchase-invoice/
│   │   ├── create-purchase-invoice.handler.ts
│   │   └── create-purchase-invoice.impl.ts
│   ├── update-purchase-invoice/
│   │   ├── update-purchase-invoice.handler.ts
│   │   └── update-purchase-invoice.impl.ts
│   └── delete-purchase-invoice/
│       ├── delete-purchase-invoice.handler.ts
│       └── delete-purchase-invoice.impl.ts
├── controllers/
│   └── purchase-invoice.controller.ts
├── dto/
│   └── purchase-invoice.dto.ts
├── events/
│   ├── create-purchase-invoice/
│   │  ├── purchase-invoice-created.event.ts
│   │  ├── purchase-invoice-created.handler.ts
│   ├── update-purchase-invoice/
│   │  ├── purchase-invoice-updated.event.ts
│   │  ├── purchase-invoice-updated.handler.ts
│   └── delete-purchase-invoice/
│   │   └── purchase-invoice-deleted.event.ts
│   │   └── purchase-invoice-deleted.handler.ts
├── models/
│   └── purchase-invoice.model.ts
├── queries/
│   ├── get-purchase-invoice/
│   │   ├── get-purchase-invoice.handler.ts
│   │   └── get-purchase-invoice.impl.ts
│   └── ...
├── services/
│   └── purchase-invoice.service.ts
├── app.module.ts
└── main.ts

```
