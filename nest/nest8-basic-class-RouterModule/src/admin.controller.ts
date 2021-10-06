import { Controller, Get } from '@nestjs/common';

@Controller()
export class AdminController {
  @Get()
  get() {
    return 'This is Admin Page';
  }
}
