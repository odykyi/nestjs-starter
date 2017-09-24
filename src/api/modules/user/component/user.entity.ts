import {Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ObjectIdColumn()
  companyId: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
