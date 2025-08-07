import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes unknown fields
      forbidNonWhitelisted: true, // throws an error if an unknown field is present
      transform: true, // automatically transforms types (e.g., string to number)
    }),
  );

  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.app.set('json spaces', 2);
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
