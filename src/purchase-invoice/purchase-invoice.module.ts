import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { PurchaseInvoiceSchema } from './model/purchase-invoice.model';
import { PurchaseInvoiceController } from './purchase-invoice.controller';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { QueryHandlers } from './queries/handler';
import { RepositoryHandlers } from './repository/purchase-invoice-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'purchaseInvoice', schema: PurchaseInvoiceSchema },
    ]),
  ],
  controllers: [PurchaseInvoiceController],
  providers: [
    PurchaseInvoiceService,
    ...CommandHandlers,
    ...QueryHandlers,
    ...RepositoryHandlers,
  ],
  // exports: [PurchaseInvoiceService, PurchaseInvoiceModelProvider],
})
export class PurchaseInvoiceModule {}
