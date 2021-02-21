import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async listarProdutos(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async criarProduto(newProduct: Product): Promise<Product> {
    const newProd = new Product();
    newProd.nome = newProduct.nome;
    newProd.valor = newProduct.valor;
    newProd.peso = newProduct.peso;
    newProd.altura = newProduct.altura;
    newProd.comprimento = newProduct.comprimento;
    newProd.estoque = newProduct.estoque;

    return await this.productRepository.save(newProduct);
  }

  async UpdateProduct(product: Product): Promise<Product> {
    const productApdate = await this.productRepository.findOne(product.id);

    return await this.productRepository.save(productApdate);
  }

  async deleteProduct(idProduct: number): Promise<any> {
    return await this.productRepository.delete(idProduct);
  }
}
