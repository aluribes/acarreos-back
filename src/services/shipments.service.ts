import { Injectable, Inject } from '@nestjs/common';
import { CreateShipmentDto } from '../dtos/shipments.dto';
import { UpdateShipmentDto } from '../dtos/shipments.dto';
import { Db } from 'mongodb';

@Injectable()
export class ShipmentsService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
  }

  findAll() {
    return `This action returns all shipments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipment`;
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
