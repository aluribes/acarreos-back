import { Injectable, Inject } from '@nestjs/common';
import { CreateAdminDto } from '../dtos/admins.dto';
import { UpdateAdminDto } from '../dtos/admins.dto';
import { Db } from 'mongodb';

@Injectable()
export class AdminsService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

  getAdmins(){
    const adminCollection = this.database.collection('admin');
    return adminCollection.find().toArray();
  }
}

  /*
  const adminCollection = database.collection('admin');
  const admins = await adminCollection.find().toArray();
  console.log(admins);
  */
