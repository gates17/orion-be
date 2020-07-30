import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
    constructor(private addressesService: ShippingService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.addressesService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.addressesService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.addressesService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.addressesService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.addressesService.delete(id);
    }
    
}
