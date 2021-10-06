import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { DashboardModule } from './admin/dashboard.module';

@Module({
  imports: [DashboardModule],
  controllers: [AdminController],
})
export class AdminModule {}
