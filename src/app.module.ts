import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dbConfig } from "./config/db.config";
import { UserController } from "./controllers/user.controller";
import { User } from "./entity/user.entity";
import { UserService } from "./service/user.service";

const modelService = [AppService, UserService];
const modelController = [AppController, UserController];
const modelEntity = [User];
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.user,
      password: dbConfig.pass,
      database: dbConfig.database,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      dropSchema: dbConfig.dropSchema,
      synchronize: dbConfig.synchronize,
      cache: dbConfig.cache,
      logging: dbConfig.logging,
      ssl: dbConfig.ssl,
    }),
    TypeOrmModule.forFeature([...modelEntity]),
  ],
  controllers: [...modelController],
  providers: [...modelService],
})
export class AppModule {}
