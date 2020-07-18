import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from '@nestjsplus/knex';
import { UsersModule } from './controllers/users/users.module';


@Module({
  imports: [
    KnexModule.register({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'gates17',
        password: 'postgres',
        database: 'tico',
        port: 5432,
      },
      debug:true,
      acquireConnectionTimeout:2,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
