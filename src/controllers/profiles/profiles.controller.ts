import { Controller } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
    constructor(private usersService: UsersService) {}
   
    //localhost:3000/users
    @Get()
    async findAll(): Promise<any> {
      return await this.usersService.findAll();
    }

    
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
