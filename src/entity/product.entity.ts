import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    valor: string;
    @Column()
    peso: string;
    @Column()
    altura: string;
    @Column()
    comprimento: string;
    @Column()
    estoque: number; //vai armazenar o JWT
  }