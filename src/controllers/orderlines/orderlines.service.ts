import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class OrderlinesService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let lines = [];
        const trx = await this.knex.transaction();
        try{
            lines = await trx.table('orderline')
                .select()
                .from('orderline');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return lines;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('orderline').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('orderline')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('orderline')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('orderline')
        .where('id', id)
        .del()
        
    }
    
}
