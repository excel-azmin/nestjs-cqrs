import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseInvoiceDto {
  @ApiProperty({ description: 'Name of the item', example: 'Item A' })
  itemName: string;

  @ApiProperty({ description: 'Quantity of the item', example: 5 })
  quantity: number;

  @ApiProperty({ description: 'Price per item', example: 10.5 })
  price: number;

  @ApiProperty({ description: 'Total price for the quantity', example: 52.5 })
  total: number;

  @ApiProperty({ description: 'Seller of the item', example: 'Seller X' })
  seller: string;
}
