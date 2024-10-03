import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

import { CreateClientDto } from '../dtos/clients.dto';
import { UpdateClientDto } from '../dtos/clients.dto';
import { Client } from '../entities/clients.entity';
import { Shipment } from '../entities/shipments.entity';

import { Db, ObjectId } from 'mongodb';
import { Model, Types } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Client.name) private clientModel: Model<Client>,
    @InjectModel(Shipment.name) private shipmentModel: Model<Shipment>,
  ) {}

  // create(data: CreateClientDto) {
  //   const newClient= new this.clientModel(data)
  //   return newClient.save();
  // }

  async create(data: CreateClientDto) {
    // Encriptar la contraseña antes de guardar al cliente
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds);

    // Crear un nuevo cliente con la contraseña encriptada
    const newClient = new this.clientModel({
      ...data,
      password: hashedPassword,
    });

    return newClient.save();
  }

  findAll() {
    return this.clientModel.find().populate('shipments').exec();
  }

  async findOne(id: string) {
    return this.clientModel.find({_id: id}).populate('shipments');
  }

  // const clientWithShipments = await this.clientModel.findById(clientId).populate('shipments').exec();

  async update(id: string, changes: UpdateClientDto) {
    const client = await this.clientModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!client) {
      throw new NotFoundException(`Client ${id} not found`);
    }
    return client;
  }

  async remove(id: string) {
    const client = await this.clientModel.findByIdAndDelete(id);
    if (!client) {
      throw new NotFoundException(`Client ${id} not found`);
    }
    return client;
  }

  async removeShipment(id: string, shipmentId: string) {
    const client = await this.clientModel.findById(id);
    client.shipments.pull(shipmentId);
    return client.save();
  }

  async addShipments(id: string, shipmentsIds: string[]) {
    // Encontramos el cliente por ID
    const client = await this.clientModel.findById(id);
    if (!client) {
      throw new NotFoundException(`Client ${id} not found`);
    }
  
    // Convertimos los ObjectIds existentes a un Set para mejor rendimiento al hacer búsquedas
    const existingShipmentsSet = new Set(client.shipments.map((shipmentId) => shipmentId.toString()));
  
    // Filtramos los shipments que ya existen
    const newShipments = shipmentsIds.filter((shipmentId) => !existingShipmentsSet.has(shipmentId));
  
    // Añadimos solamente los nuevos shipments
    client.shipments.push(...newShipments.map((id) => new Types.ObjectId(id)));
  
    return client.save();
  }
  
}