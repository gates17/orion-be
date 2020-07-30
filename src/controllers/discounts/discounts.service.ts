import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class DiscountsService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let discounts = [];
        const trx = await this.knex.transaction();
        try{
            discounts = await trx.table('discount')
                .select()
                .from('discount');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return discounts;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('discount').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('discount')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('discount')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('discount')
        .where('id', id)
        .del()
        
    }
    
}
