// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Request } from 'express';

// //decorator용 guard
// @Injectable()
// export class AuthCheckGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     return type === 'Bearer' ? token : undefined;
//   }

//   async canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest<Request>();
//     if (Constants.usePassportAuthentication) {
//       Logger.info('request.isAuthenticated : %s', request.isAuthenticated());
//       if (request.isAuthenticated()) {
//         return true;
//       }
//     }

//     const token = this.extractTokenFromHeader(request);
//     if (Constants.enableTokenLog) {
//       Logger.info('token : %s', token);
//     }
//     if (token) {
//       try {
//         const payload = await this.jwtService.verifyAsync(token);
//         if (Constants.enableTokenLog) {
//           Logger.info('payload : %s', payload);
//         }
//       } catch (err) {
//         throw Exception('AccountError2', AccountError2, err);
//       }
//     } else {
//       throw Exception('AccountError3', AccountError3);
//     }
//     return true;
//   }
// }
