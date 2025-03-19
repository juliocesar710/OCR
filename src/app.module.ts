import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './modules/upload/upload.module';
import { OcrModule } from './modules/ocr/ocr.module';
import { LlmModule } from './modules/llm/llm.module';
import { InvoiceModule } from './modules/invoice/invoice.module';

@Module({
  imports: [UploadModule, OcrModule, LlmModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
