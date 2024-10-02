import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Carrier } from '../entities/carriers.entity';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@Entity()
export class Bison extends Document {

  @Prop({ required: true })
  @Column()
  name: string;

  @Prop({ required: true })
  @Column()
  description: string;

  @Prop({ required: true })
  @Column()
  status: string;

  @Prop()
  @Column({ nullable: true })
  endRestDate?: string;

  @Prop({type: Number})
  @Column('int')
  kilometersTraveled: number;

  // @Prop()
  // @OneToOne(() => Carrier, (carrier) => carrier.bison, { nullable: true })
  // @JoinColumn() // Indica que esta entidad posee la clave foránea
  // carrier?: Carrier;
}

export const BisonSchema = SchemaFactory.createForClass(Bison);