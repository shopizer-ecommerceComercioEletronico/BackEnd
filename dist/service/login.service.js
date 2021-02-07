"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const login_entity_1 = require("../entity/login.entity");
let LoginService = class LoginService {
    constructor(loginRepository) {
        this.loginRepository = loginRepository;
    }
    async listarUsuarios() {
        return await this.loginRepository.find();
    }
    async criarLogin(newLogin) {
        const login = new login_entity_1.Login();
        login.email = newLogin.email;
        login.passWord = newLogin.passWord;
        return await this.loginRepository.save(newLogin);
    }
    async UpdateUser(user) {
        const userApdate = await this.loginRepository.findOne(user.id);
        return await this.loginRepository.save(userApdate);
    }
    async deleteUser(idUsuario) {
        return await this.loginRepository.delete(idUsuario);
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(login_entity_1.Login)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map