import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


import { CreateCarrierDto } from '../dtos/carriers.dto';
import { UpdateCarrierDto } from '../dtos/carriers.dto';
import { Carrier } from '../entities/carriers.entity';
import { Shipment } from '../entities/shipments.entity';

import { Db } from 'mongodb';
import { Model, Types } from 'mongoose';

@Injectable()
export class CarriersService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Carrier.name) private carrierModel: Model<Carrier>,
    @InjectModel(Shipment.name) private shipmentModel: Model<Shipment>,
  ) {}

  create(data: CreateCarrierDto) {
    const newCarrier= new this.carrierModel(data)
    return newCarrier.save();
  }

  findAll() {
    return this.carrierModel.find().populate('shipments').exec();
  }

  async findOne(id: string) {
    const carrier = await this.carrierModel.find({_id: id}).populate('shipments').exec();
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

  async removeShipment(id: string, shipmentId: string) {
    const carrier = await this.carrierModel.findById(id);
    carrier.shipments.pull(shipmentId);
    return carrier.save();
  }

  async addShipments(id: string, shipmentsIds: string[]) {
    // Encontramos el carrier por ID
    const carrier = await this.carrierModel.findById(id);
    if (!carrier) {
      throw new NotFoundException(`Carrier ${id} not found`);
    }
  
    // Convertimos los ObjectIds existentes a un Set para mejor rendimiento al hacer búsquedas
    const existingShipmentsSet = new Set(carrier.shipments.map((shipmentId) => shipmentId.toString()));
  
    // Filtramos los shipments que ya existen
    const newShipments = shipmentsIds.filter((shipmentId) => !existingShipmentsSet.has(shipmentId));
  
    // Añadimos solamente los nuevos shipments
    carrier.shipments.push(...newShipments.map((id) => new Types.ObjectId(id)));
  
    return carrier.save();
  }

}

