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

  create(createCarrierDto: CreateCarrierDto) {
    return 'This action adds a new carrier';
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

  update(id: number, updateCarrierDto: UpdateCarrierDto) {
    return `This action updates a #${id} carrier`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrier`;
  }

  getCarriers(){
    const carrierCollection = this.database.collection('carrier');
    return carrierCollection.find().toArray();
  }
}

  /*
  const carrierCollection = database.collection('carrier');
  const carriers = await carrierCollection.find().toArray();
  console.log(carriers);
  */
