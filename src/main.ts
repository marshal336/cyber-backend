import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by')
  app.setGlobalPrefix('api')
  app.use(cookieParser())

  app.enableCors({
    credentials: true,
    origin: process.env.ORIGIN,
  })

  const config = new DocumentBuilder()
    .setTitle('Next Shop Backend')
    .addBearerAuth()
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
  await app.listen(process.env.PORT ?? 5500);
}

bootstrap();
