import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.profileService.findAll();
    }

    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.profileService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.profileService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.profileService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.profileService.delete(id);
    }
    
}
