import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePurchaseInvoiceCommand } from './commands/impl/create-purchase-invoice.command';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';

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

  findAll() {
    return `This action returns all purchaseInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseInvoice`;
  }

  update(id: number, updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return `This action updates a #${id} purchaseInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseInvoice`;
  }
}
