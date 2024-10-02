import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shipment } from '../entities/shipments.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@Entity()
export class Client extends Document {

  @Prop({ required: true })
  @Column()
  username: string;

  @Prop({ required: true })
  @Column()
  email: string;

  @Prop({ required: true })
  @Column()
  password: string;

  @Prop()
  @Column({ nullable: true })
  photo?: string;

  @OneToMany(() => Shipment, (shipment) => shipment.client)
  shipments: Shipment[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
