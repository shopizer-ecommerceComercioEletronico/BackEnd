import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column()
  firstName: string;
  
  @ApiProperty()
  @Column()
  lastName: string;
  
  @ApiProperty()
  @Column()
  country: string;
  
  @ApiProperty()
  @Column()
  state: string;
  
  @ApiProperty()
  @Column()
  user: string;
  
  @ApiProperty()
  @Column()
  email: string;
  
  @ApiProperty()
  @Column()
  password: string; //vai armazenar o JWT
}
