import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateShipmentDto } from '../dtos/shipments.dto';
import { UpdateShipmentDto } from '../dtos/shipments.dto';
import { Shipment } from '../entities/shipments.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class ShipmentsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Shipment.name) private shipmentModel: Model<Shipment>,
  ) {}

  create(data: CreateShipmentDto) {
    const newShipment= new this.shipmentModel(data)
    return newShipment.save();
  }

  findAll() {
    return this.shipmentModel.find().exec();
  }

  async findOne(id: string) {
    const shipment = await this.shipmentModel.findById(id).exec();
    if (!shipment){
      throw new NotFoundException(`shipment ${id} not found`)
    }
      return shipment;
  }

  update(id: string, changes: UpdateShipmentDto) {
    const shipment = this.shipmentModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!shipment){
      throw new NotFoundException(`shipment ${id} not found`)
    }
      return shipment;
  }

  remove(id: string) {
    return this.shipmentModel.findByIdAndDelete(id);
  }
}

  /*
  const shipmentCollection = database.collection('shipment');
  const shipments = await shipmentCollection.find().toArray();
  console.log(shipments);
  */
