import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaxesService } from './taxes.service';

@Controller('taxes')
export class TaxesController {
    constructor(private taxesService: TaxesService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.taxesService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.taxesService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.taxesService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.taxesService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.taxesService.delete(id);
    }
    
}
