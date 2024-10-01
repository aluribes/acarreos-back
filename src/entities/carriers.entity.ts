import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrier {
  @PrimaryGeneratedColumn()
  idCarrier: number;

  @Column()
  username: string;

  @Column()
  rol: string;
}
