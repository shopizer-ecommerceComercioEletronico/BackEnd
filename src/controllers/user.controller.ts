import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  HttpStatus,
  UseGuards,
  Patch,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from '@nestjs/swagger';
import { User } from '../entity/user.entity';
import { UserService } from "../service/user.service";

@ApiTags('User')
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  //Crud Usuario

  
  @Post("register")
  createUser(@Body() user: User, @Res() resposta) {
    this.userService
      .createUser(user)
      .then((mensagem) => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao criar usuario" });
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get("all")
  buscarUsuario(@Res() resposta) {
    this.userService
      .listarUsuarios()
      .then((mensagem) => {
        resposta.status(HttpStatus.OK).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao buscar usuarios" });
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  updateUser(@Body() user: User, @Res() resposta) {
    this.userService
      .updateUser(user)
      .then((mensagem) => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta.HttpStatus(HttpStatus.BAD_REQUEST)
        .json({ mensagem: "Erro ao atualizar" });
      })
  }

}
