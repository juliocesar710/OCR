import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { LlmModule } from '../llm/llm.module';
import { LlmService } from '../llm/llm.service';
import { HttpModule } from '@nestjs/axios';



@Module({
  imports: [LlmModule, HttpModule],
  controllers: [UploadController],
  providers: [UploadService, LlmService],
})
export class UploadModule {}
