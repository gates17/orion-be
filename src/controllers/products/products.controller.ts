import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
//import { Request } from 'express';
// import { CreateProduct, UpdateProduct, ListAllProducts } from './models';

@Controller('products')
export class ProductsController {
  /*
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
  */
  /*
  @Get()
    findAll(@Req() request: Request): string {
      return 'This action returns all cats';
    }
  */
}