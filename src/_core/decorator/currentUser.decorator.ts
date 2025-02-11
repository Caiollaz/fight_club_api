import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@clerk/express';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
