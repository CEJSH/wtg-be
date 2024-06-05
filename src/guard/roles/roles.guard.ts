import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Exception } from 'src/class/exception/exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // const roles = this.reflector.get(Roles, context.getHandler());
    // if (!roles) {
    //   return true;
    // }

    const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getClass(),
      context.getHandler(),
    ]);

    if (roles.length === 0) {
      return true;
    }

    // const request = context.switchToHttp().getRequest<Request>();
    // if (request?.user) {
    //   const user = request.user as Partial<UserEntity>;

    //   if (roles.includes(user.role)) {
    //     return true;
    //   } else {
    //     throw Exception(
    //       'AccountError5',
    //       AccountError5,
    //       new Error(`${user.role}의 api 접근 권한을 확인해주세요.`),
    //     );
    //   }
    // } else {
    //   throw Exception('AccountError4', AccountError4);
    // }
  }
}
