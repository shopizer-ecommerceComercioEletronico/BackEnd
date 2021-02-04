import { Entity} from 'typeorm';

@Entity()
export class User {
  
  id: number;

  firstName: string;

  lastName:string;

  country: string;

  state: string;
}