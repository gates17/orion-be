

import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../users/dto/users.dto';
import { User} from '../users/interface/users.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    /*
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto);
    }
    */
  
    @Get()
    async findAll(): Promise<any> {
      return this.usersService.findAll();
    }
}