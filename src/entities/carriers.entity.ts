import { Bison } from '../entities/bisons.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Carrier extends Document {

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  rol: string;

  @Prop()
  photo?: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Shipment' }] }) // Usamos 'Shipment' como string
  shipments: Types.Array<Types.ObjectId>; // Referencia a los envíos
}

export const CarrierSchema = SchemaFactory.createForClass(Carrier);