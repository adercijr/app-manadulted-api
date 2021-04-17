import { createConnection } from 'typeorm';
import App from './app';
import 'reflect-metadata';
import { User } from './entity/User';

createConnection().then(async (connection) => {
  console.log('Inserting a new user into the database...');
  const user = new User();
  user.age = 25;
  user.firstName = 'Aderci';
  user.lastName = 'Junior';
  await connection.manager.save(user);
  console.log(`saved a new user with id: ${user.id}`);
});

App.listen(3000, () => console.log('Executando na porta 3000'));
