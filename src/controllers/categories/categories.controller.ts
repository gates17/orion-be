import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.categoryService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.categoryService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.categoryService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.categoryService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.categoryService.delete(id);
    }
    
}
