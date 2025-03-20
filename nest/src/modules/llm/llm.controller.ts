import { Controller, Post, Body } from '@nestjs/common';
import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Post('explain-text')
  async explainText(@Body() body: { text: string }) {
    const { text } = body;
    try {
      const explanation = await this.llmService.explainText(text);
      return explanation;
    } catch (error) {
      throw new Error('Error explaining the text');
    }
  }
}
