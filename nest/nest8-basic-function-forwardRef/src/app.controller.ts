import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Player1Service } from './player1.service';
import { Player2Service } from './player2.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private player1Service: Player1Service,
    private player2Service: Player2Service,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
