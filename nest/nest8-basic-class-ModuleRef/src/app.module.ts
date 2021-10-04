import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScopeDefaultService } from './scope-default.service';
import { ScopeRequestService } from './scope-request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ScopeDefaultService, ScopeRequestService],
})
export class AppModule {}
