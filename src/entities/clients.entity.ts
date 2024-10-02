import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shipment } from '../entities/shipments.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  idClient: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo?: string;

  @OneToMany(() => Shipment, (shipment) => shipment.client)
  shipments: Shipment[];
}
