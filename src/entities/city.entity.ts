import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  idCity: number;

  @Column()
  nameCity: string;

  @Column()
  idRegion: number;

  @Column()
  nameRegion: string;

  @Column()
  idNation: number;

  @Column()
  nameNation: string;

  @Column({ nullable: true })
  imgNation?: string;
}

