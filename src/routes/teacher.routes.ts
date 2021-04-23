import { Request, Response, Router } from 'express';
import CreateTeacherService from '../services/CreateTeacherService';

const teacherRouter = Router();

teacherRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { firstName, lastName, level } = request.body;

    const createTeacher = new CreateTeacherService();

    const teacher = createTeacher.execute({
      firstName,
      lastName,
      level,
    });

    return response.json(teacher);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default teacherRouter;
