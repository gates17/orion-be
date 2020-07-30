import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DiscountsService } from './discounts.service';

@Controller('discounts')
export class DiscountsController {
    constructor(private discountService: DiscountsService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.discountService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.discountService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.discountService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.discountService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.discountService.delete(id);
    }
    
}
