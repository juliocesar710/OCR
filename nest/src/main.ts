import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: ["http://localhost:3000", "https://ocr-azure.vercel.app"], // Permitindo múltiplas origens
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Permite cookies e autenticação (se necessário)
  });

  

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
