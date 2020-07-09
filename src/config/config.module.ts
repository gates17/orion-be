import { Module, Global } from '@nestjs/common';
import { ConfigManagerModule } from '@nestjsplus/config';
import { ConfigService } from './config.service';
import { UsersController } from './users/users.controller';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      useFile: 'config/development.env',
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
  controllers: [UsersController],
})
export class ConfigModule {}