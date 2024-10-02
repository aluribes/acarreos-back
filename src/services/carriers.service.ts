import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCarrierDto } from '../dtos/carriers.dto';
import { UpdateCarrierDto } from '../dtos/carriers.dto';
import { Carrier } from '../entities/carriers.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class CarriersService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Carrier.name) private carrierModel: Model<Carrier>,
  ) {}

  create(data: CreateCarrierDto) {
    const newCarrier= new this.carrierModel(data)
    return newCarrier.save();
  }

  findAll() {
    return this.carrierModel.find().exec();
  }

  async findOne(id: string) {
    const carrier = await this.carrierModel.findById(id).exec();
    if (!carrier){
      throw new NotFoundException(`carrier ${id} not found`)
    }
      return carrier;
  }

  update(id: string, changes: UpdateCarrierDto) {
    const carrier = this.carrierModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!carrier){
      throw new NotFoundException(`carrier ${id} not found`)
    }
      return carrier;
  }

  remove(id: string) {
    return this.carrierModel.findByIdAndDelete(id);
  }
}

  /*
  const carrierCollection = database.collection('carrier');
  const carriers = await carrierCollection.find().toArray();
  console.log(carriers);
  */
