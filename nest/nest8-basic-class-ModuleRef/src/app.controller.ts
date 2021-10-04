import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('has-default-scope-service')
  defaultService(): boolean {
    return !!this.appService.getDefaultScopeService() as boolean;
  }

  @Get('is-same-request-scope-service-instance-with-context-id')
  async requestScopeResolveWithContextId() {
    const arr =
      await this.appService.resolvedRequestScopeServiceWithContextId();

    return arr[0] === arr[1];
  }

  @Get('is-same-request-scope-service-instance-without-context-id')
  async requestScopeResolveWithoutContextId() {
    const arr =
      await this.appService.resolvedRequestScopeServiceWithoutContextId();

    return arr[0] === arr[1];
  }
}
