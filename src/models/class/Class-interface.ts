import LessonInterface from '../lesson/Lesson-interface';
import StudentInterface from '../student/Student-interface';

export default interface ClassInterface {
  name: string;
  students: StudentInterface[];
  lessons: LessonInterface[];
  addStudent(firstName: string, lastName: string): StudentInterface;
  removeStudent(id: string): void;
  addLesson(name: string, content: string): LessonInterface;
  removeLesson(id: string): void;
}
