import { EntityRepository, Repository } from 'typeorm';
import Teacher from '../models/Teacher';

@EntityRepository(Teacher)
class TeacherRepository extends Repository<Teacher> {
  public async findAllTeachers(): Promise<Teacher[] | null> {
    const findClass = await this.find();

    return findClass || null;
  }

  public async findByLevel(level: string): Promise<Teacher[] | null> {
    const findClass = await this.find({
      where: { level },
    });

    return findClass || null;
  }
}

export default TeacherRepository;
