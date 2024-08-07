import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UppercasePipe } from './pipe/uppercase.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new UppercasePipe()); // use global pipe
  await app.listen(3000);
}
bootstrap();
