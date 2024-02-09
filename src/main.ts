import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as process from 'process'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({ origin: process.env.CORS_ENABLED_ORIGIN || '*' })
  const config = new DocumentBuilder()
    .setTitle('Locus API Documentation')
    .setDescription('API documentation for a test project')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(process.env.APP_PORT || 3000, async () =>
    console.info(`Application is running on: ${await app.getUrl()}`),
  )
}

bootstrap()
