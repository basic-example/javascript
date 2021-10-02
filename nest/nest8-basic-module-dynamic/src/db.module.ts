import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class DbModule {
  static register(options): DynamicModule {
    return {
      module: DbModule,
      providers: [
        {
          provide: 'credential',
          useValue:
            options.type == 'production'
              ? {
                  host: 'example.com',
                  username: 'example',
                  password: 'abcdefg',
                }
              : {
                  host: 'localhost',
                  username: 'root',
                  password: '1234',
                },
        },
      ],
      exports: ['credential'],
    };
  }
}
