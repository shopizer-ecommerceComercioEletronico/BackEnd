import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "../entity/user.entity";
import { UserService } from "../service/user.service";

// Lembrar de Mudar o nome no controller senao da zica
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  //Crud Usuario

  
  @Post("register")
  criarUsuario(@Body() User, @Res() resposta) {
    this.userService
      .criarUsuario(User)
      .then((mensagem) => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao criar usuario" });
      });
  }

  @Post("login")
  Login(@Body() User, @Res() resposta) {
    this.userService
      .loginUser(User)
      .then((mensagem) => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao logar" });
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get("all")
  buscarUsuario(@Res() resposta, @Request() req) {
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
}
