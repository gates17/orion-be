import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import { KnexOptions } from '@nestjsplus/knex';

@Injectable()
export class ConfigService extends ConfigManager {
  // Our custom "schema"
  // We supply it to the ConfigManager by extending the
  // ConfigManager class and implementing the
  // provideConfigSpec() method, which simply returns
  // our custom schema
 
  createKnexOptions(): KnexOptions {
    return {
        client: 'pg',
        debug: true,
        connection: {
          host : '127.0.0.1',
          user : 'postgres',
          password : 'postgres',
          database : 'tico',
          port: 5432,
        },
        migrations: {
          directory:  './knex/migrations',
          sortDirsSeparately: false,
        },
        seeds: {
          directory: './seeds/dev',
        },
    };
  }
}