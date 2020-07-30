import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class BrandsService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let brands = [];
        const trx = await this.knex.transaction();
        try{
            brands = await trx.table('brand')
                .select()
                .from('brand');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return brands;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('brand').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('brand')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('brand')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('brand')
        .where('id', id)
        .del()
        
    }
    
}
