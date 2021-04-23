import { getCustomRepository } from 'typeorm';
import Teacher from '../models/Teacher';
import TeacherRepository from '../repositories/TeacherRepository';

interface Request {
  firstName: string;
  lastName: string;
  level: string;
}

class CreateTeacherService {
  public async execute({
    firstName,
    lastName,
    level,
  }: Request): Promise<Teacher> {
    const teacherRepository = getCustomRepository(TeacherRepository);

    const teacher = teacherRepository.create({
      firstName,
      lastName,
      level,
    });

    await teacherRepository.save(teacher);

    return teacher;
  }
}

export default CreateTeacherService;
