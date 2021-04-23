import { createConnection } from 'typeorm';
import App from './app';
import 'reflect-metadata';

createConnection();

App.listen(3000, () => console.log('Executando na porta 3000'));
