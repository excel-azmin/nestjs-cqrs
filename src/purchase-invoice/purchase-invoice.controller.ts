import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { PurchaseInvoiceService } from './purchase-invoice.service';

@Controller('purchase-invoice')
@ApiTags('purchase-invoice')
export class PurchaseInvoiceController {
  constructor(
    private readonly purchaseInvoiceService: PurchaseInvoiceService,
  ) {}

  @Post()
  async create(@Body() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return await this.purchaseInvoiceService.create(createPurchaseInvoiceDto);
  }
}
