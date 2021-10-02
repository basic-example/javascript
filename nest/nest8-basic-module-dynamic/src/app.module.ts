import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db.module';

@Module({
  imports: [DbModule.register({ type: 'production' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
