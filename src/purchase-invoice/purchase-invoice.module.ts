import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { PurchaseInvoiceSchema } from './model/purchase-invoice.model';
import { PurchaseInvoiceController } from './purchase-invoice.controller';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { QueryHandlers } from './queries/handler';
import { GetPurchaseInvoiceHandler } from './queries/handler/get-purchase-invoice.handler';
import { PurchaseInvoiceRepository } from './repository/purchase-invoice-repository/purchase-invoice-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'purchaseInvoice', schema: PurchaseInvoiceSchema },
    ]),
  ],
  controllers: [PurchaseInvoiceController],
  providers: [
    PurchaseInvoiceService,
    GetPurchaseInvoiceHandler,
    PurchaseInvoiceService,
    PurchaseInvoiceRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class PurchaseInvoiceModule {}
