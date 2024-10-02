import { Shipment } from '../entities/shipments.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

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

  @Prop({ type: [{ type: Types.ObjectId, ref: Shipment.name }] }) 
  shipments: Types.Array<Shipment>;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
