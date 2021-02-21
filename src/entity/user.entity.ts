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
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  country: string;
  @Column()
  state: string;
  @Column()
  user: string;
  @Column()
  email: string;
  @Column()
  password: string; //vai armazenar o JWT
}
