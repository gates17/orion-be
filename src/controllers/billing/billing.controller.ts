import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
    constructor(private billingService: BillingService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.billingService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.billingService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.billingService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.billingService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.billingService.delete(id);
    }
    
}
