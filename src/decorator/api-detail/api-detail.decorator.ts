import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiDefaultResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

interface ApiDetailErrors {
  status: number;
  description?: string;
}

interface ApiDetailDecorator {
  summary: string;
  description?: string;
  okStatus?: number;
  okDescription?: string;
  okType?: any;
  errorStatus?: number;
  errorDescription?: string;
  errorType?: any;
  errors?: ApiDetailErrors[];
}

export const ApiDetail = (props: ApiDetailDecorator) => {
  const decorators = [
    ApiOperation({
      summary: props.summary,
      description: props.description || '',
    }),
  ];
  if (props.okStatus || props.okType || props.okDescription) {
    if (props.okStatus === 201) {
      decorators.push(
        ApiCreatedResponse({
          status: props.okStatus,
          description: props.okDescription,
          type: props.okType,
        }),
      );
    } else {
      decorators.push(
        ApiOkResponse({
          status: props.okStatus,
          description: props.okDescription,
          type: props.okType,
        }),
      );
    }
  }

  if (props.errors?.length > 0) {
    decorators.push(
      ...props.errors.map((error) =>
        ApiResponse({
          status: error.status,
          description: error.description,
        }),
      ),
    );
  }

  if (props.errorStatus || props.errorType || props.errorDescription) {
    decorators.push(
      ApiDefaultResponse({
        status: props.errorStatus,
        description: props.errorDescription,
        type: props.errorType,
      }),
    );
  }

  return applyDecorators(...decorators);
};
