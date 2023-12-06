import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { PurchaseInvoice } from 'src/purchase-invoice/model/purchase-invoice.model';
import { PurchaseInvoiceRepository } from 'src/purchase-invoice/repository/purchase-invoice-repository/purchase-invoice-repository';
import { GetPurchaseInvoicesQuery } from '../impl/get-purchase-invoice.query';

@QueryHandler(GetPurchaseInvoicesQuery)
export class GetPurchaseInvoiceHandler
  implements IQueryHandler<GetPurchaseInvoicesQuery>
{
  constructor(
    @InjectModel(PurchaseInvoice.name)
    private readonly purchaseInvoiceRepository: PurchaseInvoiceRepository,
  ) {}

  async execute(query: GetPurchaseInvoicesQuery): Promise<PurchaseInvoice[]> {
    return await this.purchaseInvoiceRepository.findAll();
  }
}
