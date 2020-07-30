import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class TaxesService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let taxes = [];
        const trx = await this.knex.transaction();
        try{
            taxes = await trx.table('taxes')
                .select()
                .from('taxes');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return taxes;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('taxes').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('taxes')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('taxes')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('taxes')
        .where('id', id)
        .del()
        
    }
    
}
