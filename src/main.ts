import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { AppModule } from './app.module';

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
  }
}

async function bootstrap() {
  // get server config from yml
  const serverConfig = config.get('server');
  // create logger with the prefix of the function name 
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log(`Microservice listening...`)
  });
}
bootstrap();
