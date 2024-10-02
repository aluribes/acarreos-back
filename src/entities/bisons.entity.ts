import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Carrier } from '../entities/carriers.entity';

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

  @OneToOne(() => Carrier, (carrier) => carrier.bison, { nullable: true })
  @JoinColumn() // Indica que esta entidad posee la clave foránea
  carrier?: Carrier;
}
