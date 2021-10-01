import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  getHello(@Body() body) {
    return body;
  }
}
