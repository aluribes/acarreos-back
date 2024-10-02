import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@Entity()
export class Admin extends Document {

  @Prop({ required: true })
  @Column()
  username: string;

  @Prop({ required: true })
  @Column()
  password: string;

  @Prop()
  @Column({ nullable: true })
  photo?: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);