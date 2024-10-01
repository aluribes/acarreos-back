import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  idClient: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  defaultLocation?: string;

  @Column()
  password: string;
}
