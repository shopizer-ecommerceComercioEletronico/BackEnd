import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

  async listarUsuarios(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(email: string): Promise<any> {
    return await this.userRepository.findOne({ email: email });
  }

  async createUser(newUser: User): Promise<User> {
    const newPerson = new User();
    newPerson.firstName = newUser.firstName;
    newPerson.lastName = newUser.lastName;
    newPerson.state = newUser.state;
    newPerson.country = newUser.country;
    newPerson.email = newUser.email;
    newPerson.password = await bcrypt.hashSync(
      newUser.password,
      this.saltRounds
    );
    newPerson.user = newUser.user;

    return await this.userRepository.save(newPerson);
  }

  async updateUser(user: User): Promise<User> {
    if (user.password) {
      user.password = await bcrypt.hashSync(user.password, this.saltRounds);
    }

    return await this.userRepository.save(user);
  }

  async deleteUser(idUsuario: number): Promise<any> {
    return await this.userRepository.delete(idUsuario);
  }
}
