import { ApiProperty } from '@nestjs/swagger';

export class ReturnErrorClass {
  @ApiProperty()
  status: number;

  @ApiProperty()
  data: NonNullable<unknown> | [];

  @ApiProperty()
  errorCode: string;

  @ApiProperty()
  cause: {
    stack: string;
    message: string;
  };

  @ApiProperty()
  message: string;

  @ApiProperty()
  timestamp: string;

  @ApiProperty()
  path: string;
}
