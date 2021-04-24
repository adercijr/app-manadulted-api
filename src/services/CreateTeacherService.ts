import { getCustomRepository } from 'typeorm';
import Teacher from '../models/Teacher';
import TeacherRepository from '../repositories/TeacherRepository';

interface Request {
  firstName: string;
  lastName: string;
  level: string;
  classes: string;
}

class CreateTeacherService {
  public async execute({
    firstName,
    lastName,
    level,
    classes,
  }: Request): Promise<Teacher> {
    const teacherRepository = getCustomRepository(TeacherRepository);

    const teacher = teacherRepository.create({
      firstName,
      lastName,
      level,
      classes,
    });

    await teacherRepository.save(teacher);

    return teacher;
  }
}

export default CreateTeacherService;
