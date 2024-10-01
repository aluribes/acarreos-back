import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  guideCode: number;

  @Column()
  idOriginCity: number;

  @Column()
  idDestinationCity: number;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  idLastCity: number;

  @Column('decimal')
  cost: number;

  @Column()
  requestDate: string;

  @Column()
  lastUpdateDate: string;

  @Column({ nullable: true })
  description: string;
}
