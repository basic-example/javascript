import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject('Msg') private msg) {}

  @Get()
  index() {
    return this.msg;
  }
}
