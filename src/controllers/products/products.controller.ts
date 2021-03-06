import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
   
  //localhost:3000/users
  @Get()
  async findAll(): Promise<any> {
    return await this.productService.findAll();
  }

  
  @Post()
  async create(@Body() body):Promise<any> {
    return await this.productService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.productService.findOne(id);

  }

  @Put(':id')
  async update(@Param('id') id: number,@Body() body): Promise<any> {
    return await this.productService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    return this.productService.delete(id);
  }
  
}