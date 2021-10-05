import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nestjs')
  @Redirect('https://nestjs.com', 301)
  nestJs(): string {
    return this.appService.getHello();
  }

  @Get('google')
  @Redirect('https://nestjs.com', 301)
  google(): Record<string, unknown> {
    return {
      url: 'http://google.com',
      statusCode: 302,
    };
  }
}
