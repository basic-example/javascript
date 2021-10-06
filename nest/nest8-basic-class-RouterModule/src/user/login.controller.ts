import { Controller, Get } from '@nestjs/common';

@Controller()
export class LoginController {
  @Get()
  get() {
    return 'This is User Login Page';
  }
}
