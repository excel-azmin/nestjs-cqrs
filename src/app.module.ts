import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonDepModule } from './common/module/common-dep.module';
import { SalesInvoiceModule } from './sales-invoice/sales-invoice.module';

@Module({
  imports: [
    CommonDepModule,
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27011/nestjs_cqrs_db',
      {
        authSource: 'admin',
      },
    ),
    SalesInvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
