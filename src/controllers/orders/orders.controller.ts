import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.orderService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.orderService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.orderService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.orderService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.orderService.delete(id);
    }
    
}
