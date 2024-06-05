import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { CachedUrl } from './types';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();
    const { httpAdapter } = this.httpAdapterHost;

    const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET';
    const reqUrl = httpAdapter.getRequestUrl(request);
    const includePaths = [
      // Routes to be excluded
    ];
    const includeExactPaths = [
      // Routes to be excluded
      ...Object.values(CachedUrl),
    ];
    // Logger.info(`${request.method} url: ${request.url}`);
    if (
      !isGetRequest ||
      (isGetRequest &&
        !includePaths.find((f) => reqUrl.includes(f)) &&
        !includeExactPaths.find((f) => reqUrl === f))
    ) {
      return undefined;
    }
    // if (Constants.enableHttpLogRes) {
    //   Logger.info(`${request.method} url: ${request.url} is return from cache`);
    // }
    return httpAdapter.getRequestUrl(request);
  }
}
