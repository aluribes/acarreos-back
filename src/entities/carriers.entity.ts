import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Bison } from '../entities/bisons.entity';
import { Shipment } from '../entities/shipments.entity';

@Entity()
export class Carrier {
  @PrimaryGeneratedColumn()
  idCarrier: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  @Column({ nullable: true })
  photo?: string;

  @OneToMany(() => Shipment, (shipment) => shipment.carrier)
  shipments: Shipment[];

  @OneToOne(() => Bison, (bison) => bison.carrier, { nullable: true })
  bison?: Bison;
}
