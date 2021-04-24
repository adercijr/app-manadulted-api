import { Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TeacherRepository from '../repositories/TeacherRepository';
import CreateTeacherService from '../services/CreateTeacherService';

const teacherRouter = Router();

teacherRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { firstName, lastName, level, classes } = request.body;

    const createTeacher = new CreateTeacherService();

    const teacher = createTeacher.execute({
      firstName,
      lastName,
      level,
      classes,
    });

    return response.json(teacher);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

teacherRouter.get('/', async (request: Request, response: Response) => {
  const teacherRepository = getCustomRepository(TeacherRepository);

  const teachers = await teacherRepository.findByLevel('A1');

  return response.json(teachers);
});

export default teacherRouter;
