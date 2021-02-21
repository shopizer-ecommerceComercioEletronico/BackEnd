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
  } from "@nestjs/common";
  import { Product } from "../entity/product.entity";
  import { ProductService } from "../service/product.service";
  
  // Lembrar de Mudar o nome no controller senao da zica
  @Controller("product")
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
    //Crud Produto
    @Post()
    criarProduto(@Body() Product, @Res() resposta) {
      this.productService
        .criarProduto(Product)
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
  