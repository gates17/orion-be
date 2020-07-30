import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class BillingService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let addresses = [];
        const trx = await this.knex.transaction();
        try{
            addresses = await trx.table('billing_address')
                .select()
                .from('billing_address');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return addresses;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('billing_address').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('billing_address')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('billing_address')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('billing_address')
        .where('id', id)
        .del()
        
    }
    
}
