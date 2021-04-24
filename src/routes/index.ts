import { response, Router } from 'express';
import teacherRouter from './teacher.routes';

const routes = Router();

routes.use('/teacher', teacherRouter);

routes.use('/', (req, res) => {
  res.send('Ola Mundo');
});

export default routes;
