import ClassInterface from '../class/Class-interface';

export default interface TeacherInterface {
  id: string;
  firstName: string;
  lastName: string;
  Classes: ClassInterface[];
}
