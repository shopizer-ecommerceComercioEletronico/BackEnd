import { Injectable } from "@nestjs/common";
import { User } from "../entity/user.entity";
import { UserService } from "../service/user.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private jwtStrategy: JwtStrategy
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.getUser(email);
    const password = bcrypt.compareSync(pass, user.password);
    if (password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
