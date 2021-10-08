import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UpperString = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return data.toUpperCase();
  },
);
