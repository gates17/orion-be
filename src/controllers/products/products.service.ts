import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class ProductsService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let products = [];
        const trx = await this.knex.transaction();
        try{
            products = await trx.table('products')
                .select()
                .from('products');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return products;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('products').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('products')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('products')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('products')
        .where('id', id)
        .del()
        
    }
    
}
