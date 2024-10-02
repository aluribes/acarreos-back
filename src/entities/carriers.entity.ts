import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Bison } from '../entities/bisons.entity';
import { Shipment } from '../entities/shipments.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@Entity()
export class Carrier extends Document {

  @Prop({ required: true })
  @Column()
  username: string;

  @Prop({ required: true })
  @Column()
  password: string;

  @Prop({ required: true })
  @Column()
  rol: string;

  @Prop()
  @Column({ nullable: true })
  photo?: string;

  @OneToMany(() => Shipment, (shipment) => shipment.carrier)
  shipments: Shipment[];

  // @OneToOne(() => Bison, (bison) => bison.carrier, { nullable: true })
  // bison?: Bison;
}

export const CarrierSchema = SchemaFactory.createForClass(Carrier);