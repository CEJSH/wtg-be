import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionClass {
  private readonly error: Record<string, any>;

  constructor(message: string, errorCode: string) {
    this.error = { message, errorCode };
  }

  public record() {
    return this.error;
  }
}

export const Exception = (
  errorCode: string,
  message: string,
  error?: Error | unknown,
) => {
  return new HttpException(
    new ExceptionClass(message, errorCode).record(),
    HttpStatus.INTERNAL_SERVER_ERROR,
    {
      cause: error || new Error(message),
    },
  );
};
