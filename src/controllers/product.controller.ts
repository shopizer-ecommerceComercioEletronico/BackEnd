import { Controller, Post, Body, Get, Res, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Product } from "../entity/product.entity";
import { ProductService } from "../service/product.service";

@ApiTags("Produtos")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  criarProduto(@Body() product: Product, @Res() resposta) {
    this.productService
      .criarProduto(product)
      .then((mensagem) => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao criar produto" });
      });
  }

  @Get()
  buscarProduto(@Res() resposta) {
    this.productService
      .listarProdutos()
      .then((mensagem) => {
        resposta.status(HttpStatus.OK).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao buscar produtos" });
      });
  }
}
