// import { Constants } from '@config/constants';
// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { Logger } from '@utils/logger/logger';
// import { Observable, tap } from 'rxjs';

// @Injectable()
// export class LoggingInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     if (context.getType() === 'http') {
//       const http = context.switchToHttp();
//       const request = http.getRequest();
//       const response = http.getResponse();
//       const user = request.user;
//       if (Constants.enableHttpLogReq) {
//         Logger.info(`http method: ${request.method} url: ${request.url}`);
//       }
//       if (Constants.enableHttpLogReqDetail) {
//         Logger.info(
//           `http method: ${request.method}\nurl: ${
//             request.url
//           }\naccess_token: ${request.headers.authorization?.split(
//             ' ',
//           )[1]}\nquery: ${JSON.stringify(
//             request.query,
//             null,
//             2,
//           )}\nparams: ${JSON.stringify(
//             request.params,
//             null,
//             2,
//           )}\nbody: ${JSON.stringify(request.body, null, 2)}\nuser: ${
//             user
//               ? JSON.stringify(
//                   { id: user.id, role: user.role, name: user.name },
//                   null,
//                   2,
//                 )
//               : undefined
//           }`,
//         );
//       }
//       const now = Date.now();
//       return next.handle().pipe(
//         tap((data) => {
//           if (Constants.enableHttpLogRes) {
//             Logger.info(`Response Data ${request.url} ${Date.now() - now}ms `);
//           }
//           if (Constants.enableHttpLogResDetail) {
//             const resString = JSON.stringify(data, null, 2);

//             Logger.info(
//               `Response Data ${request.url} ${
//                 Date.now() - now
//               }ms ${resString} `,
//             );
//           }
//         }),
//       );
//     }

//     const now = Date.now();
//     return next.handle().pipe(
//       tap(() => {
//         Logger.info(`After... ${Date.now() - now}ms`);
//       }),
//     );
//   }
// }
