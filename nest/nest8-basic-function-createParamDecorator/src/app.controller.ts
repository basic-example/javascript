import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UpperString } from './upper-string.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@UpperString('hello world!') msg: string): string {
    return msg;
  }
}
