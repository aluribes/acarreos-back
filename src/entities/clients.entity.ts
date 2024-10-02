import { Shipment } from '../entities/shipments.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  photo?: string;

  // @OneToMany(() => Shipment, (shipment) => shipment.client)
  // shipments: Shipment[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
