import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderlinesService } from './orderlines.service';

@Controller('orderlines')
export class OrderlinesController {
    constructor(private orderlineService: OrderlinesService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.orderlineService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.orderlineService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.orderlineService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.orderlineService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.orderlineService.delete(id);
    }
    
}
