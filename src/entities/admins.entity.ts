import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  idAdmin: number;

  @Column()
  username: string;

  @Column()
  rol: string;
}
