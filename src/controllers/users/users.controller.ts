

import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../users/dto/users.dto';
import { User} from '../users/interface/users.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      //console.log(this.usersService.test());
      return await this.usersService.findAll();
    }

    /*
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
      return 'This action adds a new cat';
    }
  
    @Get()
    findAll(@Query() query: ListAllEntities) {
      return `This action returns all cats (limit: ${query.limit} items)`;
    }
    */

    //localhost:3000/users/create
    
    @Post()
    async create(@Body() body):Promise<any> {
      return await this.usersService.create(body);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return await this.usersService.findOne(id);

    }
  
    @Put(':id')
    async update(@Param('id') id: number,@Body() body): Promise<any> {
      return await this.usersService.update(id, body);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.usersService.delete(id);
    }
    
}