import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class City extends Document {

  @Prop({ required: true })
  nameCity: string;

  @Prop({type: Number, required: true })
  idRegion: number;

  @Prop({ required: true })
  nameRegion: string;

  @Prop({type: Number, required: true })
  idNation: number;

  @Prop({ required: true })
  nameNation: string;

  @Prop({ required: true })
  imgNation?: string;
}

export const CitySchema = SchemaFactory.createForClass(City);