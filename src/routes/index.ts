import { Router } from 'express';
import teacherRouter from './teacher.routes';

const routes = Router();

routes.use('/teacher', teacherRouter);

export default routes;
