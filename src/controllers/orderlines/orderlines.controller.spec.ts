import { Test, TestingModule } from '@nestjs/testing';
import { OrderlinesController } from './orderlines.controller';

describe('Orderlines Controller', () => {
  let controller: OrderlinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderlinesController],
    }).compile();

    controller = module.get<OrderlinesController>(OrderlinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
