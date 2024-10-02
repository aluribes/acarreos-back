import { Bison } from '../entities/bisons.entity';
import { Shipment } from '../entities/shipments.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  // @OneToMany(() => Shipment, (shipment) => shipment.carrier)
  // shipments: Shipment[];

  // @OneToOne(() => Bison, (bison) => bison.carrier, { nullable: true })
  // bison?: Bison;
}

export const CarrierSchema = SchemaFactory.createForClass(Carrier);