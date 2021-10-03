import { forwardRef, Module } from '@nestjs/common';
import { Ref1Module } from './ref1.module';

@Module({
  imports: [forwardRef(() => Ref1Module)],
})
export class Ref2Module {}
