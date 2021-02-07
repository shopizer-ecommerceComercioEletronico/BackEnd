import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    listarUsuarios(): Promise<User[]>;
    criarUsuario(newUser: User): Promise<User>;
    UpdateUser(user: User): Promise<User>;
    deleteUser(idUsuario: number): Promise<any>;
}
