import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@Entity()
export class City extends Document {

  @Prop({ required: true })
  @Column()
  nameCity: string;

  @Prop({type: Number, required: true })
  @Column()
  idRegion: number;

  @Prop({ required: true })
  @Column()
  nameRegion: string;

  @Prop({type: Number, required: true })
  @Column()
  idNation: number;

  @Prop({ required: true })
  @Column()
  nameNation: string;

  @Prop({ required: true })
  @Column({ nullable: true })
  imgNation?: string;
}

export const CitySchema = SchemaFactory.createForClass(City);