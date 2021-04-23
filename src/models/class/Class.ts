/* eslint-disable class-methods-use-this */
import Lesson from '../lesson/Lesson';
import LessonInterface from '../lesson/Lesson-interface';
import Student from '../student/Student';
import StudentInterface from '../student/Student-interface';
import ClassInterface from './Class-interface';

class Class implements ClassInterface {
  students: StudentInterface[] = [];

  lessons: LessonInterface[] = [];

  constructor(public name: string) {}

  addStudent(firstName: string, lastName: string): StudentInterface {
    const newStudent = new Student(firstName, lastName);
    this.students.push(newStudent);
    return newStudent;
  }

  removeStudent(id: string): void {
    const index = this.students.findIndex((student) => student.id === id);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }

  addLesson(name: string, content: string): LessonInterface {
    const newLesson = new Lesson(name, content);
    this.lessons.push(newLesson);
    return newLesson;
  }

  removeLesson(id: string): void {
    const index = this.lessons.findIndex((lesson) => lesson.id === id);
    if (index > -1) {
      this.lessons.splice(index, 1);
    }
  }
}

export default Class;
