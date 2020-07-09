import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from '@nestjsplus/knex';
import { UsersModule } from './controllers/users/users.module';



@Module({
  imports: [
    KnexModule.register({
      client: 'pg',
      version: '10.7',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'tico',
        port: 5432,
      },
      acquireConnectionTimeout: 10000,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
