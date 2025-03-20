import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as Tesseract from 'tesseract.js';
import { LlmService } from './../llm/llm.service'; // Importando o serviço LlmService

@Controller('upload')
export class UploadController {
  constructor(private readonly llmService: LlmService) {} // Injetando o LlmService no controlador

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      if (!file) {
        throw new InternalServerErrorException('Nenhum arquivo foi enviado.');
      }

      console.log('Recebendo arquivo:', file.originalname);

      // Passo 1: Extrair texto da imagem usando Tesseract
      const textResult = await Tesseract.recognize(file.buffer, 'eng');
      const extractedText = textResult.data.text;

      // Passo 2: Enviar o texto extraído para a IA via LlmService
      const explanation = await this.llmService.explainText(extractedText);

      // Retornando o texto extraído e a explicação da IA
      return {
        message: 'Upload realizado com sucesso!',
        extractedText,
        explanation, // Análise feita pela IA
      };
    } catch (error) {
      console.error('Erro ao processar imagem:', error);
      throw new InternalServerErrorException('Erro ao processar a imagem');
    }
  }
}
