import { Module } from '@nestjs/common';
import { OrderlinesService } from './orderlines.service';
import { OrderlinesController } from './orderlines.controller';

@Module({
  controllers: [OrderlinesController],
  providers: [OrderlinesService],
  exports: [OrderlinesService]
})
export class OrderlinesModule {}
