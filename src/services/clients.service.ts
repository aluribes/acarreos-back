import { Injectable, Inject } from '@nestjs/common';
import { CreateClientDto } from '../dtos/clients.dto';
import { UpdateClientDto } from '../dtos/clients.dto';
import { Db } from 'mongodb';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
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
  const cityCollection = database.collection('city');
  const cities = await cityCollection.find().toArray();
  console.log(cities);

  const clientCollection = database.collection('client');
  const clients = await clientCollection.find().toArray();
  console.log(clients);
  */
