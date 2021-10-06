import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DashboardModule } from './admin/dashboard.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    AdminModule,
    DashboardModule,
    UserModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
        children: [
          {
            path: 'dashboard',
            module: DashboardModule,
          },
        ],
      },
      {
        path: 'user',
        module: UserModule,
      },
    ]),
  ],
})
export class AppModule {}
