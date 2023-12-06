import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { SalesInvoiceService } from './sales-invoice.service';

@Controller('sales-invoice')
@ApiTags('Sales Invoice')
export class SalesInvoiceController {
  constructor(private readonly salesInvoiceService: SalesInvoiceService) {}

  @Post()
  create(@Body() createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return this.salesInvoiceService.create(createSalesInvoiceDto);
  }

  @Get()
  findAll() {
    return this.salesInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalesInvoiceDto: UpdateSalesInvoiceDto,
  ) {
    return this.salesInvoiceService.update(+id, updateSalesInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesInvoiceService.remove(+id);
  }
}
