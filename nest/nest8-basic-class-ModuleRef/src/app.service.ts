import { Injectable } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { ScopeDefaultService } from './scope-default.service';
import { ScopeRequestService } from './scope-request.service';

@Injectable()
export class AppService {
  private service: ScopeDefaultService;
  constructor(private moduleRef: ModuleRef) {}

  getDefaultScopeService() {
    return this.moduleRef.get(ScopeDefaultService, {
      strict: false,
    });
  }

  async resolvedRequestScopeServiceWithContextId() {
    const contextId = ContextIdFactory.create();

    return await Promise.all([
      this.moduleRef.resolve(ScopeRequestService, contextId),
      this.moduleRef.resolve(ScopeRequestService, contextId),
    ]);
  }
  async resolvedRequestScopeServiceWithoutContextId() {
    return await Promise.all([
      this.moduleRef.resolve(ScopeRequestService),
      this.moduleRef.resolve(ScopeRequestService),
    ]);
  }
}
