import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class OrdersService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let orders = [];
        const trx = await this.knex.transaction();
        try{
            orders = await trx.table('order')
                .select()
                .from('order');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return orders;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('order').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('order')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('order')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('order')
        .where('id', id)
        .del()
        
    }
    
}
