// import { Exception } from '@class/exception/exception';
// import { Constants } from '@config/constants';
// import { AccountError7 } from '@error/account.error';
// import { Injectable } from '@nestjs/common';
// import { PassportSerializer } from '@nestjs/passport';
// import { Logger } from '@utils/logger/logger';
// import { JoinTypesEnum } from 'src/enum/join-types.enum';
// import { UserRepository } from 'src/repository/user.repository';
// import { JwtUserInterface } from './jwt-user.interface';

// //about passport and encoding and decoding

// @Injectable()
// export class SessionSerializer extends PassportSerializer {
//   constructor(private readonly userRepository: UserRepository) {
//     super();
//   }

//   serializeUser(
//     user: JwtUserInterface,
//     done: (err: Error, user: any) => void,
//   ): any {
//     const jwtUser = {
//       id: user.id,
//       email: user.email,
//       phone: user.phone,
//       joinType: user.joinType,
//       role: user.role,
//     } as JwtUserInterface;
//     if (Constants.enablePassportLog) {
//       Logger.info('serializeUser : %s', jwtUser);
//     }
//     done(null, jwtUser);
//   }

//   async deserializeUser(
//     payload: JwtUserInterface,
//     done: (err: Error, user: any) => void,
//   ): Promise<any> {
//     if (Constants.enablePassportLog) {
//       Logger.info('deserializeUser : %s', payload);
//     }
//     const { id, email, phone, joinType, role } = payload;
//     if (
//       joinType === JoinTypesEnum.Email ||
//       joinType === JoinTypesEnum.Password
//     ) {
//       const user = await this.userRepository
//         .findByEmail(email, joinType)
//         .catch((error) => {
//           done(null, {});
//           return undefined;
//         });
//       if (user?.id) {
//         const { password, ...rest } = user;
//         if (role === user.role) {
//           done(null, rest);
//           return;
//         }
//         done(null, {});
//         return;
//       }
//     }
//     if (joinType === JoinTypesEnum.Phone) {
//       const user = await this.userRepository
//         .findByPhone(phone, joinType)
//         .catch((error) => {
//           done(null, {});
//           return undefined;
//         });
//       if (user?.id) {
//         const { password, ...rest } = user;
//         if (role === user.role) {
//           done(null, rest);
//           return;
//         }
//         done(null, {});
//         return;
//       }
//     }
//     // throw Exception('AccountError7', AccountError7);
//   }
// }
