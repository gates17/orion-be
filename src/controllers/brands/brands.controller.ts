import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BrandsService } from  './brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private brandService: BrandsService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.brandService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.brandService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.brandService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.brandService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.brandService.delete(id);
    }
    
}
