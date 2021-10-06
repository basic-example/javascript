import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get()
  get() {
    return 'This is User Page';
  }
}
