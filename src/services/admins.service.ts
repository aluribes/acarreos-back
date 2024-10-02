import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateAdminDto } from '../dtos/admins.dto';
import { UpdateAdminDto } from '../dtos/admins.dto';
import { Admin } from '../entities/admins.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class AdminsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return this.adminModel.find().exec();
  }

  async findOne(id: string) {
    const admin = await this.adminModel.findById(id).exec();
    if (!admin){
      throw new NotFoundException(`admin ${id} not found`)
    }
      return admin;
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
