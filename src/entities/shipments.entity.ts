import { City } from '../entities/city.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Shipment extends Document {

  @Prop({ type: Number, unique: true })
  guideCode: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  type: string;

  @Prop({ type: Number, required: true })
  cost: number;

  @Prop({ type: Date, required: true })
  requestDate: string;

  @Prop({ type: Date, required: true })
  lastUpdateDate: string;

  @Prop()
  description?: string;

  @Prop()
  moveSize?: string;

  @Prop({ type: Number })
  weight?: number;

  @Prop({ type: Number })
  altura?: number;

  @Prop({ type: Number })
  largo?: number;

  @Prop({ type: Number })
  ancho?: number;

  @Prop({ required: true })
  originAddress: string;

  @Prop({ required: true })
  destinationAddress: string;

  @Prop({ type: Types.ObjectId, ref: 'City' })
  originCity: City | Types.ObjectId; // Referencia a la ciudad de origen

  @Prop({ type: Types.ObjectId, ref: 'City' })
  destinationCity: City | Types.ObjectId; // Referencia a la ciudad de destino
}

export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
