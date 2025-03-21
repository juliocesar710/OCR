import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LlmService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async explainText(text: string): Promise<any> {
    try {
      const apiKey = this.configService.get<string>('REPLICATE_API_KEY');
      const response = await this.httpService.axiosRef.post(
        'https://api.replicate.com/v1/predictions',
        {
          "version": "meta/meta-llama-3-8b-instruct",
          "input": {
            "prompt": text 
          }
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
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
              'Authorization': `Token ${apiKey}`,
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
