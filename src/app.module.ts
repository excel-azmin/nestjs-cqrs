import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseInvoiceModule } from './purchase-invoice/purchase-invoice.module';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27011/nestjs_cqrs_db',
      {
        authSource: 'admin',
      },
    ),
    PurchaseInvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
