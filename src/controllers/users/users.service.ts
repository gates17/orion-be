import { Injectable,Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
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

