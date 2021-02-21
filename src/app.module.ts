import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { jwtConstants } from "./auth/constants";
import { JwtStrategy } from "./auth/strategy/jwt.strategy";
import { LocalStrategy } from "./auth/strategy/local.strategy";
import { UserController } from "./controllers/user.controller";
import { User } from "./entity/user.entity";
import { UserService } from "./service/user.service";
import { dbConfig } from "./config/db.config";


const modelService = [
  AppService,
  UserService,
  AuthService,
  LocalStrategy,
  JwtStrategy,
];
const modelController = [AppController, UserController, AuthController];
const modelEntity = [User];

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
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