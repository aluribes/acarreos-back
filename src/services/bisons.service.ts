import { Injectable, Inject } from '@nestjs/common';
import { CreateBisonDto } from '../dtos/bisons.dto';
import { UpdateBisonDto } from '../dtos/bisons.dto';
import { Db } from 'mongodb';

@Injectable()
export class BisonsService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createBisonDto: CreateBisonDto) {
    return 'This action adds a new bison';
  }

  findAll() {
    return `This action returns all bisons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bison`;
  }

  update(id: number, updateBisonDto: UpdateBisonDto) {
    return `This action updates a #${id} bison`;
  }

  remove(id: number) {
    return `This action removes a #${id} bison`;
  }

  getBisons(){
    const bisonCollection = this.database.collection('bison');
    return bisonCollection.find().toArray();
  }
}

  /*
  const bisonCollection = database.collection('bison');
  const bisons = await bisonCollection.find().toArray();
  console.log(bisons);
  */
