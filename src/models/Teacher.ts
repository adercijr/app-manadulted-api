import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teachers')
class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  classes: string;

  @Column()
  level: string;
}

export default Teacher;
