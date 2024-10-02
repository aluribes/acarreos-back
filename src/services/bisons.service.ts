import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
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
    @InjectModel(Bison.name) private bisonModel: Model<Bison>
  ) {}

  async create(data: CreateBisonDto) {
    const newBison= new this.bisonModel(data)
    return newBison.save();
  }

  findAll() {
    return this.bisonModel.find().populate('carrier').exec();
  }

  async findOne(id: string) {
    const bison = await this.bisonModel.findOne({ _id: id }).populate('carrier').exec();
    if (!bison){
      throw new NotFoundException(`bison ${id} not found`)
    }
      return bison;
  }

  update(id: string, changes: UpdateBisonDto) {
    const bison = this.bisonModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!bison){
      throw new NotFoundException(`bison ${id} not found`)
    }
      return bison;
  }

  remove(id: string) {
    return this.bisonModel.findByIdAndDelete(id);
  }

}
