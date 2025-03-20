import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './modules/upload/upload.module';
import { OcrModule } from './modules/ocr/ocr.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { LlmModule } from './modules/llm/llm.module';


@Module({
  imports: [UploadModule, OcrModule, InvoiceModule, LlmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
