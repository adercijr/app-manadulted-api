import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classes')
class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  students: string;

  @Column()
  lessons: string;
}

export default Class;
