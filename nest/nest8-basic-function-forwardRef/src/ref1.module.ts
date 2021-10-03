import { forwardRef, Module } from '@nestjs/common';
import { Ref2Module } from './ref2.module';

@Module({
  imports: [forwardRef(() => Ref2Module)],
})
export class Ref1Module {}
