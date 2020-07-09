import { Module, Global } from '@nestjs/common';
import { ConfigManagerModule } from '@nestjsplus/config';
import { ConfigService } from './config.service';
import { UsersController } from 'src/controllers/users/users.controller';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      allowMissingEnvFile: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
  controllers: [UsersController],
})
export class ConfigModule {}