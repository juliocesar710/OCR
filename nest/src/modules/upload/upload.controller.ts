import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as Tesseract from 'tesseract.js';
import { LlmService } from './../llm/llm.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly llmService: LlmService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      if (!file) {
        throw new InternalServerErrorException('Nenhum arquivo foi enviado.');
      }

      console.log('Recebendo arquivo:', file.originalname);

    
      const textResult = await Tesseract.recognize(file.buffer, 'eng');
      const extractedText = textResult.data.text;

   
      const explanation = await this.llmService.explainText(extractedText);

     
      return {
        message: 'Upload realizado com sucesso!',
        extractedText,
        explanation, 
      };
    } catch (error) {
      console.error('Erro ao processar imagem:', error);
      throw new InternalServerErrorException('Erro ao processar a imagem');
    }
  }
}
