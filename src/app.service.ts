import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class AppService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex) {}

  getCats(): Promise<any> {
    return this.knex('users')
      .select('*')
      .from('users');
  }
  
 
}