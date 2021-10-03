import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Player1Service } from './player1.service';
import { Player2Service } from './player2.service';
import { Ref1Module } from './ref1.module';
import { Ref2Module } from './ref2.module';

@Module({
  imports: [Ref1Module, Ref2Module],
  controllers: [AppController],
  providers: [AppService, Player1Service, Player2Service],
})
export class AppModule {}
