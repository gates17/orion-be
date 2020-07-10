import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(3000);
}
bootstrap();
