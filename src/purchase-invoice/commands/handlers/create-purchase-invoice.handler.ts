import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PurchaseInvoiceRepository } from 'src/purchase-invoice/repository/purchase-invoice-repository/purchase-invoice-repository';
import { CreatePurchaseInvoiceCommand } from '../impl/create-purchase-invoice.command';

@CommandHandler(CreatePurchaseInvoiceCommand)
export class CreatePurchaseInvoiceHandler
  implements ICommandHandler<CreatePurchaseInvoiceCommand>
{
  constructor(
    private readonly purchaseInvoiceRepository: PurchaseInvoiceRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreatePurchaseInvoiceCommand): Promise<any> {
    console.log(command);
    const { createPurchaseInvoiceDto } = command;

    return this.purchaseInvoiceRepository.create(createPurchaseInvoiceDto);
  }
}
