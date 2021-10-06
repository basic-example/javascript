import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserController } from './user.controller';
import { LoginModule } from './user/login.module';

@Module({
  controllers: [UserController],
  imports: [
    LoginModule,
    RouterModule.register([
      {
        path: 'login',
        module: LoginModule,
      },
    ]),
  ],
})
export class UserModule {}
