import { Test, TestingModule } from '@nestjs/testing';
import { OrderlinesService } from './orderlines.service';

describe('OrderlinesService', () => {
  let service: OrderlinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderlinesService],
    }).compile();

    service = module.get<OrderlinesService>(OrderlinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
