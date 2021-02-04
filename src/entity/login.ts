import { Entity} from 'typeorm';

@Entity()
export class Login {
  
  id: number;

  email: string;

  passWord:string;//vai armazenar o JWT

}