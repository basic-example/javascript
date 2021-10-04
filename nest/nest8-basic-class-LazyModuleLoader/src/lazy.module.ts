import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
    // controllers in lazy module will not behave as expected.
  ],
  providers: [],
})
export class LazyModule {}
