import { Module } from '@nestjs/common';
import { OrderlinesService } from './orderlines.service';

@Module({
  providers: [OrderlinesService]
})
export class OrderlinesModule {}
