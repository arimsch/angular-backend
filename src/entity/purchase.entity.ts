import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface PurchaseEntity extends InMemoryDBEntity {
    id: string;
    title: string;
    price: number;
    moreInfo: string;
}

