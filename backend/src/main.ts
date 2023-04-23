import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3045);
  console.log('http://localhost:3045/graphql');
}
bootstrap();
