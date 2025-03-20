import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class LlmService {
  constructor(private readonly httpService: HttpService) {}

  async explainText(text: string): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.post(
        'https://api.replicate.com/v1/predictions',
        {
          "version": "meta/meta-llama-3-8b-instruct",
          "input": {
            "prompt": text // Aqui você deve passar o texto extraído da imagem
          }
        },
        {
          headers: {
            Authorization: `Bearer r8_I9iUUMFrf2540p6fJ61lRroue6mI12g3yAr0b`,
            'Content-Type': 'application/json',
          },
        },
      );

      const getResult = async (getUrl: string, timeout = 30000) => {
        const startTime = Date.now();
        
        const checkResult = async (): Promise<string> => {
          if (Date.now() - startTime > timeout) {
            throw new Error('Timeout waiting for prediction result');
          }

          const response = await axios.get(getUrl, {
            headers: {
              'Authorization': `Token r8_I9iUUMFrf2540p6fJ61lRroue6mI12g3yAr0b`
            }
          });
          
          if (response.data.status === 'succeeded') {
            const output = response.data.output;
            if (Array.isArray(output)) {
              return output
                .join(' ')
                .trim()
                .replace(/\n{3,}/g, '\n\n')
                .replace(/\s+/g, ' ')
                .replace(/\n /g, '\n');
            }
            return output;
          } else if (response.data.status === 'failed') {
            throw new Error('Prediction failed');
          }
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          return checkResult();
        };

        return checkResult();
      };

      const result = await getResult(response.data.urls.get);
      return result;
    } catch (error) {
      console.error('Erro ao chamar o Replicate API:', error);
      throw new Error('Falha ao processar o texto');
    }
  }
}
