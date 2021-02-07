/*
Autenticar no sistema
Incluir novo cliente
Trocar senha
Alterar dados do cliente
firebase: https://comercio-eletronico-52e4a-default-rtdb.firebaseio.com/
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
