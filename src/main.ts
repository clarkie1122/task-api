import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // get server config from yml
  const serverConfig = config.get('server');
  // create logger with the prefix of the function name 
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  // enable cors for development only
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }

  const PORT = process.env.PORT || serverConfig.port;
  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`)
}
bootstrap();
