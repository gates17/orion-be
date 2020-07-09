import { Injectable,Inject } from '@nestjs/common';
import { User } from '../users/interface/users.interface';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

    /*
    create(user: User): Promise<any> {
        this.users.push(user);
    }
    */

    async findAll(): Promise<any> {
        return await this.knex('users')
        .select('*')
        .from('users');
    }
}

