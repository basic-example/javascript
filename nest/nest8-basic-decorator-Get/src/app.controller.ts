import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getWorld(): string {
    return this.appService.getHello();
  }

  @Get('/slash-world')
  getSlashWorld(): string {
    return this.appService.getHello();
  }

  @Get('-world')
  getHyphenWorld(): string {
    return this.appService.getHello();
  }

  @Get('the-*-world')
  getWildWorld(): string {
    return this.appService.getHello();
  }
}
