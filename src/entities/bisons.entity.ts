import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Carrier } from './carriers.entity';

@Schema()
export class Bison extends Document {

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string;

  @Prop()
  endRestDate?: string;

  @Prop({type: Number})
  kilometersTraveled: number;

  @Prop({ type: Types.ObjectId, ref: Carrier.name})
  carrier : Carrier | Types.ObjectId;

}

export const BisonSchema = SchemaFactory.createForClass(Bison);