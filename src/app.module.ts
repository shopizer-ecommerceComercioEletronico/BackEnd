import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
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
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "comercioEletronico",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([...modelEntity]),
  ],
  controllers: [...modelController],
  providers: [...modelService],
})
export class AppModule {}
