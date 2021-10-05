import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'useValueProp',
      useValue: 'it created by useValue.',
    },
    {
      provide: 'useFactoryProp',
      useFactory: () => {
        return { it: 'created by useFactory.' };
      },
    },
    {
      provide: 'useExistingProp',
      useExisting: AppService,
    },
    {
      provide: 'useClassProp',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
