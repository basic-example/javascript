import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject('credential') private credential) {}

  @Get()
  getHello(): string {
    return this.credential;
  }
}
