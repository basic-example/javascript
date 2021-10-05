import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('useValueProp') private useValueProp,
    @Inject('useFactoryProp') private useFactoryProp,
    @Inject('useExistingProp') private useExistingProp,
    @Inject('useClassProp') private useClassProp,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
