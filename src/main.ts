/*
Autenticar no sistema
Incluir novo cliente
Trocar senha
Alterar dados do cliente

*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
