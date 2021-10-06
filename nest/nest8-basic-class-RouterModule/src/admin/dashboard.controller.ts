import { Controller, Get } from '@nestjs/common';

@Controller()
export class DashboardController {
  @Get()
  get() {
    return 'This is Admin Dashboard Page';
  }
}
