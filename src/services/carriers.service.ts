import { Injectable, Inject } from '@nestjs/common';
import { CreateCarrierDto } from '../dtos/carriers.dto';
import { UpdateCarrierDto } from '../dtos/carriers.dto';
import { Db } from 'mongodb';

@Injectable()
export class CarriersService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createCarrierDto: CreateCarrierDto) {
    return 'This action adds a new carrier';
  }

  findAll() {
    return `This action returns all carriers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrier`;
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
