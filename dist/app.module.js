"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./controllers/user.controller");
const user_entity_1 = require("./entity/user.entity");
const user_service_1 = require("./service/user.service");
const modelService = [app_service_1.AppService, user_service_1.UserService];
const modelController = [app_controller_1.AppController, user_controller_1.UserController];
const modelEntity = [user_entity_1.User];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "1234",
                database: "comercioEletronico",
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([...modelEntity]),
        ],
        controllers: [...modelController],
        providers: [...modelService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map