import { v4 } from 'uuid';
import LessonInterface from './Lesson-interface';

class Lesson implements LessonInterface {
  public id = v4();

  constructor(public name: string, public content: string) {}
}

export default Lesson;
