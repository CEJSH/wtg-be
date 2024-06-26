import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// module.hot에 접근하기위해 필수적인 선언(Typescript)
declare const module: any;
async function bootstrap() {
  const CROSS_ORIGIN =
    'http://localhost:3000,http://localhost:8201,https://admin.socket.io';

  const origin = CROSS_ORIGIN || '';
  const corsOptions = {
    origin: origin.includes(',') ? origin.split(',') : [origin],
    credentials: true,
  };

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
    httpsOptions: undefined,
    cors: corsOptions,
  });
  const docBuilder = new DocumentBuilder()
    .setTitle('WTG API Docs')
    .setDescription('WTG API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        name: 'JWT',
        in: 'header',
      },
      'Authorization',
    );
  if (process.env.NODE_ENV === 'local') {
    docBuilder.addServer(`http://localhost:${8000}`);
  }
  const config = docBuilder.build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  // app.use(bodyParser.json({ limit: '50mb' }));
  // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(8000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
