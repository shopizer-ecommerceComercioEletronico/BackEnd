/*
Autenticar no sistema
Incluir novo cliente
Trocar senha
Alterar dados do cliente
firebase: https://comercio-eletronico-52e4a-default-rtdb.firebaseio.com/
*/

import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import * as packjson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*" });

  const options = new DocumentBuilder();
  options.setTitle(packjson.name);
  options.setDescription(packjson.description);
  options.setVersion(packjson.version);

  if (process.env.APP_ENV === 'production') {
    options.addServer('https://');
  }
  
  options.addServer('http://');

  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
