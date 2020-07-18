import { Injectable,Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        return await this.knex('users')
        .select()
        .from('users');
    }

    async test(): Promise<any> {
        console.log('service')
        try{
            console.log('starting transaction')
            this.knex.transaction(function(trx: any) {
                console.log('executing transaction');
                console.log( trx);
                
                return trx.select('*').from('users')//.transacting(trx)
            })
            .then(function() {
                console.log('users displayed');
            })
            .catch(function(error) {
                // If we get here, that means that neither the 'Old Books' catalogues insert,
                // nor any of the books inserts will have taken place.
                console.error(error);
            });
        }
        finally{
        }
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

