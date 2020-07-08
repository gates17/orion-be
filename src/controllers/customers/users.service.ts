import { Injectable,Inject } from '@nestjs/common';
import { User } from './interface/users.interface';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};


  create(user: User) {
    this.users.push(user);
  }

  async findAll() {
    return await this.knex('users')
      .select('*')
      .from('users');
  }
}

