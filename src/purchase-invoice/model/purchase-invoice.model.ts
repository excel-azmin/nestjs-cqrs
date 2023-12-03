import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PurchaseInvoice extends Document {
  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  seller: string;
}

export const PurchaseInvoiceSchema =
  SchemaFactory.createForClass(PurchaseInvoice);

PurchaseInvoiceSchema.pre<PurchaseInvoice>('save', function (next) {
  this.total = this.quantity * this.price;
  next();
});
