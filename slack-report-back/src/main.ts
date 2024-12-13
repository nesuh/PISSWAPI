import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared/exceptions/global-filter-exception';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors()
  const config = new DocumentBuilder()
    .setTitle('Slack Report Generate API')
    .setDescription('Slack Report Generate API')
    .addBearerAuth()
    .setVersion('0.1')
    .build();
  
  // Create Swagger document
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  // Start the app on the defined port
  const port = process.env.PORT ?? 3001;
  await app.listen(port);

  // Log Swagger URL
  Logger.debug(`${process.env.BASE_URL}:${port}/api`, 'Swagger Docs');
}

bootstrap();
