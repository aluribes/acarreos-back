import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Client } from '../entities/clients.entity';
import { City } from '../entities/city.entity';
import { Carrier } from '../entities/carriers.entity';
import { Bison } from '../entities/bisons.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Shipment extends Document {

  @Prop({type: Number, unique: true})
  guideCode: number;

  // // Relación con City (Origen)
  // @Prop()
  // @ManyToOne(() => City, { nullable: false })
  // @JoinColumn({ name: 'idOriginCity' })
  // originCity: City;

  // // Relación con City (Destino)
  // @Prop()
  // @ManyToOne(() => City, { nullable: false })
  // @JoinColumn({ name: 'idDestinationCity' })
  // destinationCity: City;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  type: string;

  @Prop({type: Number, required: true })
  cost: number;

  @Prop({type: Date, required: true })
  requestDate: string;

  @Prop({type: Date, required: true })
  lastUpdateDate: string;

  @Prop()
  description?: string;

  @Prop()
  moveSize?: string;

  @Prop({type: Number})
  weight?: number;

  @Prop({type: Number})
  altura?: number;

  @Prop({type: Number})
  largo?: number;

  @Prop({type: Number})
  ancho?: number;

  @Prop({ required: true })
  originAddress: string;

  @Prop({ required: true })
  destinationAddress: string;

  // // Relación con Client
  // @Prop({type: Number})
  // @ManyToOne(() => Client, (client) => client.shipments, { nullable: false })
  // @JoinColumn({ name: 'idClient' })
  // client: Client;

  // // Relación con Bison
  // @Prop({type: Number})
  // @OneToOne(() => Bison, { nullable: false })
  // @JoinColumn({ name: 'idBison' })
  // bison: Bison;

  // // Relación con Carrier
  // @Prop({type: Number})
  // @ManyToOne(() => Carrier, (carrier) => carrier.shipments, { nullable: false })
  // @JoinColumn({ name: 'idCarrier' })
  // carrier: Carrier;
}

export const ShipmentSchema = SchemaFactory.createForClass(Shipment);

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
