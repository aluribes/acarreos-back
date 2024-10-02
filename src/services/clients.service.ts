import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateClientDto } from '../dtos/clients.dto';
import { UpdateClientDto } from '../dtos/clients.dto';
import { Client } from '../entities/clients.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Client.name) private clientModel: Model<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return this.clientModel.find().exec();
  }

  async findOne(id: string) {
    const client = await this.clientModel.findById(id).exec();
    if (!client){
      throw new NotFoundException(`client ${id} not found`)
    }
      return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  getClients(){
    const clientCollection = this.database.collection('client');
    return clientCollection.find().toArray();
  }
}

  /*
  const clientCollection = database.collection('client');
  const clients = await clientCollection.find().toArray();
  console.log(clients);
  */
