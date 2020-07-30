import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from '@nestjsplus/knex';
import { UsersModule } from './controllers/users/users.module';


@Module({
  imports: [
    KnexModule.register({
      client: 'mysql2',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'Br@gap017',
        database: 'tico',
        port: 3306,
      },
      debug:true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
