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
      pool: {
	      min: 2,
	      max: 50,
      }
     
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
