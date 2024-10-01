import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bison {
  @PrimaryGeneratedColumn()
  idBison: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  endRestDate?: string;

  @Column('int')
  kilometersTraveled: number;
}
