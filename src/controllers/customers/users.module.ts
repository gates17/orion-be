import { Module } from '@nestjs/common';
import { CustomersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [CustomersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
