import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateBisonDto } from '../dtos/bisons.dto';
import { UpdateBisonDto } from '../dtos/bisons.dto';
import { Bison } from '../entities/bisons.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class BisonsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Bison.name) private bisonModel: Model<Bison>,
  ) {}

  create(createBisonDto: CreateBisonDto) {
    return 'This action adds a new bison';
  }

  findAll() {
    return this.bisonModel.find().exec();
  }

  async findOne(id: string) {
    const bison = await this.bisonModel.findById(id).exec();
    if (!bison){
      throw new NotFoundException(`bison ${id} not found`)
    }
      return bison;
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
