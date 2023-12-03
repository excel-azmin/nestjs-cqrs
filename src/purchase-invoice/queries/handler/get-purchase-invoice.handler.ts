import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseInvoice } from 'src/purchase-invoice/model/purchase-invoice.model';
import { GetPurchaseInvoicesQuery } from '../impl/get-purchase-invoice.query';

@QueryHandler(GetPurchaseInvoicesQuery)
export class GetPurchaseInvoiceHandler
  implements IQueryHandler<GetPurchaseInvoicesQuery>
{
  constructor(
    @InjectModel(PurchaseInvoice.name)
    private purchaseInvoiceModel: Model<PurchaseInvoice>,
  ) {}

  async execute(query: GetPurchaseInvoicesQuery): Promise<PurchaseInvoice[]> {
    return await this.purchaseInvoiceModel.find();
  }
}
