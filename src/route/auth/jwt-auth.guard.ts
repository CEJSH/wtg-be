// import { Exception } from '@class/exception/exception';
// import { Constants } from '@config/constants';
// import { AccountError2, AccountError3 } from '@error/account.error';
// import {
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { AuthGuard } from '@nestjs/passport';
// import { Logger } from '@utils/logger/logger';
// import { Request } from 'express';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//   constructor(private jwtService: JwtService) {
//     super();
//   }

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
//     const result = await super.canActivate(context);
//     await super.logIn(request);
//     return true;
//   }

//   handleRequest(err, user, info) {
//     Logger.info('handleRequest : %s', user);
//     // You can throw an exception based on either "info" or "err" arguments
//     if (err || !user) {
//       throw err || new UnauthorizedException();
//     }
//     return user;
//   }
// }

// //passport용 guard
