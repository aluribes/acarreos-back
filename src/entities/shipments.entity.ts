import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Client } from '../entities/clients.entity';
import { City } from '../entities/city.entity';
import { Carrier } from '../entities/carriers.entity';
import { Bison } from '../entities/bisons.entity';


@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  guideCode: number;

  // Relación con City (Origen)
  @ManyToOne(() => City, { nullable: false })
  @JoinColumn({ name: 'idOriginCity' })
  originCity: City;

  // Relación con City (Destino)
  @ManyToOne(() => City, { nullable: false })
  @JoinColumn({ name: 'idDestinationCity' })
  destinationCity: City;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column('decimal')
  cost: number;

  @Column()
  requestDate: string;

  @Column()
  lastUpdateDate: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  moveSize?: string;

  @Column('int', { nullable: true })
  weight?: number;

  @Column('int', { nullable: true })
  altura?: number;

  @Column('int', { nullable: true })
  largo?: number;

  @Column('int', { nullable: true })
  ancho?: number;

  @Column()
  originAddress: string;

  @Column()
  destinationAddress: string;

  // Relación con Client
  @ManyToOne(() => Client, (client) => client.shipments, { nullable: false })
  @JoinColumn({ name: 'idClient' })
  client: Client;

  // Relación con Bison
  @OneToOne(() => Bison, { nullable: false })
  @JoinColumn({ name: 'idBison' })
  bison: Bison;

  // Relación con Carrier
  @ManyToOne(() => Carrier, (carrier) => carrier.shipments, { nullable: false })
  @JoinColumn({ name: 'idCarrier' })
  carrier: Carrier;
}

/*
"nameOriginCity": "Agna Quel'a",
    "nameDestinationCity": "Hakoda's Village",
    "idOriginRegion": 1,
    "nameOriginRegion": "Tribu Agua del Norte",
    "idDestinationRegion": 2,
    "nameDestinationRegion": "Tribu Agua del Sur",
    "idOriginNation": 1,
    "nameOriginNation": "Tribus Agua",
    "idDestinationNation": 1,
    "nameDestinationNation": "Tribus Agua",
*/
