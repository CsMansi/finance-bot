import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Use the PORT from the .env file, or 8000 as a default
  await app.listen(process.env.PORT || 8000);
}
bootstrap();