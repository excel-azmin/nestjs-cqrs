import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [HttpModule, CqrsModule],
  exports: [HttpModule, CqrsModule],
})
export class CommonDepModule {}
