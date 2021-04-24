import { createConnection } from 'typeorm';
import App from './app';
import 'reflect-metadata';

createConnection();

App.listen(8000, () => console.log('Executando na porta 8000'));
