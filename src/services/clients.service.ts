import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateClientDto } from '../dtos/clients.dto';
import { UpdateClientDto } from '../dtos/clients.dto';
import { Client } from '../entities/clients.entity';

import { Db, ObjectId } from 'mongodb';
import { Model, Types } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Client.name) private clientModel: Model<Client>,
  ) {}

  create(data: CreateClientDto) {
    const newClient= new this.clientModel(data)
    return newClient.save();
  }

  findAll() {
    return this.clientModel.find().populate('shipments').exec();
  }

  async findOne(id: string) {
    const client = await (await this.clientModel.findOne({ _id: id })).populated('shipments').exec();
    if (!client){
      throw new NotFoundException(`client ${id} not found`)
    }
      return client;
  }

  update(id: string, changes: UpdateClientDto) {
    const client = this.clientModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!client){
      throw new NotFoundException(`client ${id} not found`)
    }
      return client;
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete(id);
  }

  async removeShipment(id: string, shipmentId: string) {
    const client = await this.clientModel.findById(id);
    client.shipments.pull(shipmentId);
    return client.save();
  }

  async addShipments(id: string, shipmentsIds: string[]) {
    const client = await this.clientModel.findById(id);
    shipmentsIds.forEach((pId) => client.shipments.push(pId));
    return client.save();
  }
  
}

  /*
  const clientCollection = database.collection('client');
  const clients = await clientCollection.find().toArray();
  console.log(clients);
  */
