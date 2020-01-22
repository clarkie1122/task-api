import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

async function bootstrap() {
  // get server config from yml
  const serverConfig = config.get('server');
  // create logger with the prefix of the function name 
  const logger = new Logger('bootstrap');
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP
  });

  // const PORT = process.env.PORT || serverConfig.port;
  await app.listenAsync();
  logger.log(`Application listening`);
}
bootstrap();
