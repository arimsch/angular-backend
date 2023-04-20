import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { PurchaseEntity } from 'src/entity/purchase.entity';

@Controller('purchases')
export class PurchasesController {
  private _purchases: PurchaseEntity[] = [
    {
      id: "1",
      title: 'Проезд на метро',
      price: 40,
      moreInfo: "I'm here",
    },
    {
      id: "2",
      title: 'Iphone Pro Max XXL',
      price: 100500,
      moreInfo: "I'm here",
    },
    {
      id: "3",
      title: 'Доширак (острый)',
      price: 123,
      moreInfo: "I'm here",
    },
    {
      id: "4",
      title: 'Доширак',
      price: 100,
      moreInfo: "I'm here",
    }
  ]
  
  public async createShit(){
    return this.PurchaseService.createManyAsync(this._purchases);
  }

  constructor(private PurchaseService: InMemoryDBService<PurchaseEntity>) {
    this.createShit();
  }

  @Get()
  async getAll(): Promise<PurchaseEntity[]> {
    return this.PurchaseService.getAll();
  }

  @Post()
  async create(@Body() purchase: Partial<PurchaseEntity>): Promise<PurchaseEntity> {
    return this.PurchaseService.create(purchase);
  }

  @Put()
  async update(@Body() purchase: PurchaseEntity): Promise<void> {
    return this.PurchaseService.update(purchase);
  }

  @Get('seed')
    seed(): PurchaseEntity[] {
        this.PurchaseService.seed(
            (idx: number) => ({
                id: String(idx + 1),
                title: `Purchase-${idx + 1}`,
                price: idx + 1 + 10
            }),
            5,
        )
        return this.PurchaseService.getAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
      return this.PurchaseService.delete(id);
    }
}
