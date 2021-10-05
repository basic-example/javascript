import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  logQuery(@Query() query) {
    return query;
  }
}
