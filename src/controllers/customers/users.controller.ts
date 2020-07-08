import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import { User} from './interface/users.interface';

@Controller('customers')
export class CustomersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }
  
    @Get('users')
    async findAll() {
      return this.usersService.findAll();
    }
}