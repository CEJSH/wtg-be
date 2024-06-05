// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from '@nestjs/passport';
// import { AccountService } from '@route/account/account.service';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { UserRepository } from 'src/repository/user.repository';
// import { JwtUserInterface } from './jwt-user.interface';

// // 같이 passport랑
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly configService: ConfigService,
//     private accountService: AccountService,
//     private userRepository: UserRepository,
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.get<string>('IAO_JWT_SECRET'),
//     });
//   }

//   async validate(payload: JwtUserInterface): Promise<any> {
//     const user = await this.accountService.findByEmail(
//       payload.email,
//       payload.joinType,
//     );
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     const { password, ...rest } = user;
//     return rest;
//   }
// }
