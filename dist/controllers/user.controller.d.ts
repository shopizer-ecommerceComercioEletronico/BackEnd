import { UserService } from "../service/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    criarUsuario(User: any, resposta: any): void;
    buscarUsuario(resposta: any): void;
}
