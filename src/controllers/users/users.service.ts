import { Injectable,Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        return await this.knex('users')
        .select('*')
        .from('users');
    }

    /*
    async create(user: any): Promise<any> {
        this.knex.push(user);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('users')
        .select('*')
        .where('id', id);
    }

    async update(id:number): Promise<any>{
        this.knex('users')
        .where('id', id)
        .update({
          fieldname: 'fieldvalue'
        })
    }

    async delete(id:number): Promise<any>{
        this.knex('users')
        .where('id', id)
        .del()
        
    }
    */
}

