import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @Column()
  valor: string;

  @ApiProperty()
  @Column()
  peso: string;

  @ApiProperty()
  @Column()
  altura: string;

  @ApiProperty()
  @Column()
  comprimento: string;

  @ApiProperty()
  @Column()
  estoque: number;
}
