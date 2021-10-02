import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'Msg',
      useValue: 'Hello World',
    },
  ],
})
export class AppModule {}
