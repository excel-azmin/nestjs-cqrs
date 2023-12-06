import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePurchaseInvoiceCommand } from './commands/impl/create-purchase-invoice.command';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';

@Injectable()
export class PurchaseInvoiceService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return await this.commandBus.execute(
      new CreatePurchaseInvoiceCommand(createPurchaseInvoiceDto),
    );
  }
}
