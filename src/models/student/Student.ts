import { v4 } from 'uuid';
import StudentInterface from './Student-interface';

class Student implements StudentInterface {
  public id = v4();

  constructor(public firstName: string, public lastName: string) {}
}

export default Student;
