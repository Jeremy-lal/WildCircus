import { Representation } from './representation';

export class User {
  id: number;
  firstname: string;
  lastname: string;

  password: string;
  email: string;

  status: boolean;
  representations: Representation[];

}

