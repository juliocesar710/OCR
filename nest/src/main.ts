import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  app.enableCors({
    origin: 'https://ocr-azure.vercel.app',
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
