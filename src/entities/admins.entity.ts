import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  idAdmin: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo?: string;
}


/*
Tengo este entity que le faltan atributos:

A partir del siguiente ejemplo, agrega en la entity los atributos que faltan:
*/
