import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePurchaseInvoiceDto } from 'src/purchase-invoice/dto/create-purchase-invoice.dto';
import { PurchaseInvoice } from 'src/purchase-invoice/model/purchase-invoice.model';

@Injectable()
export class PurchaseInvoiceRepository {
  constructor(
    @InjectModel(PurchaseInvoice.name)
    private readonly purchaseInvoiceModel: Model<PurchaseInvoice>,
  ) {}

  async create(cretePurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    const newProduct = new this.purchaseInvoiceModel(cretePurchaseInvoiceDto);
    return newProduct.save();
  }

  async findAll() {
    return await this.purchaseInvoiceModel.find();
  }
}
