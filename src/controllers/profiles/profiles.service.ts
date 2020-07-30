import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class ProfilesService {
    constructor(@Inject(KNEX_CONNECTION) private readonly knex) {};

 
   

    async findAll(): Promise<any> {
        let profiles = [];
        const trx = await this.knex.transaction();
        try{
            profiles = await trx.table('profile')
                .select()
                .from('profile');
                trx.commit();
        }catch {
            trx.rollback();
        }
        return profiles;
    }

    
    async create(body: any): Promise<any> {
        return await this.knex.table('profile').insert(body);
    }

    async findOne(id:number): Promise<any> {
        return await this.knex('profile')
        .select('*')
        .where('id', id);
    }

    async update(id:number, body: any): Promise<any>{
        body["updatedAt"]=this.knex.fn.now();   
        return await this.knex('profile')
        .where('id', id)
        .update( 
            body
        )
    }

    async delete(id:number): Promise<any>{
        return await this.knex('profile')
        .where('id', id)
        .del()
        
    }
    
}
