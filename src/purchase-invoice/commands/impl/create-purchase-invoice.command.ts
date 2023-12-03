import { ICommand } from '@nestjs/cqrs';
import { CreatePurchaseInvoiceDto } from 'src/purchase-invoice/dto/create-purchase-invoice.dto';

export class CreatePurchaseInvoiceCommand implements ICommand {
  constructor(
    public readonly createPurchaseInvoiceDto: CreatePurchaseInvoiceDto,
  ) {}
}
