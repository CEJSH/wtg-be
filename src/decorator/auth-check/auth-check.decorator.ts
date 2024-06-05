// import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
// import { ApiBearerAuth } from '@nestjs/swagger';
// import { RolesGuard } from 'src/guard/roles/roles.guard';
// import { AuthCheckGuard } from 'src/route/auth/auth-check.guard';

// export const AuthCheck = (...args: string[]) => {
//   return applyDecorators(
//     SetMetadata('roles', args),
//     UseGuards(AuthCheckGuard, RolesGuard),
//     ApiBearerAuth('Authorization'),
//   );
// };
