import { Controller, Post, UseInterceptors, UploadedFile, InternalServerErrorException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as Tesseract from 'tesseract.js';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        try {
            if (!file) {
                throw new InternalServerErrorException('Nenhum arquivo foi enviado.');
            }

            console.log('Recebendo arquivo:', file.originalname);

         
            const textResult = await Tesseract.recognize(file.buffer, 'eng');

            return {
                message: 'Upload realizado com sucesso!',
                extractedText: textResult.data.text,
            };
        } catch (error) {
            console.error('Erro ao processar imagem:', error);
            throw new InternalServerErrorException('Erro ao processar a imagem');
        }
    }
}
