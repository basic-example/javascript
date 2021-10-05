import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class AppController {
  @Get('user/:name')
  user(@Param('name') name: string): string {
    return `Hello~! ${name}`;
  }

  @Get('message/:msg')
  getHello(@Param() param): string {
    return `msg: ${param.msg}`;
  }
}
