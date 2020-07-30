import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class CategoriesService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let categories = [];
        const trx = await this.knex.transaction();
        try{
            categories = await trx.table('category')
                .select()
                .from('category');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return categories;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('category').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('category')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('category')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('category')
        .where('id', id)
        .del()
        
    }
    
}
