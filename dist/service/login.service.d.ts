import { Repository } from "typeorm";
import { Login } from "../entity/login.entity";
export declare class LoginService {
    readonly loginRepository: Repository<Login>;
    constructor(loginRepository: Repository<Login>);
    listarUsuarios(): Promise<Login[]>;
    criarLogin(newLogin: Login): Promise<Login>;
    UpdateUser(user: Login): Promise<Login>;
    deleteUser(idUsuario: number): Promise<any>;
}
