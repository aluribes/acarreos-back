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

  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
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

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }

  getShipments(){
    const shipmentCollection = this.database.collection('shipment');
    return shipmentCollection.find().toArray();
  }
}

  /*
  const shipmentCollection = database.collection('shipment');
  const shipments = await shipmentCollection.find().toArray();
  console.log(shipments);
  */
