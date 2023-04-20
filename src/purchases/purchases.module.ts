import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';

@Module({
    imports: [InMemoryDBModule.forFeature('purchases')],
    controllers: [PurchasesController],
  })
export class PurchasesModule {}
