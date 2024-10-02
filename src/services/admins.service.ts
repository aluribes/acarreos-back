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

  create(data: CreateAdminDto) {
    const newAdmin= new this.adminModel(data)
    return newAdmin.save();
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

  update(id: string, changes: UpdateAdminDto) {
    const admin = this.adminModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!admin){
      throw new NotFoundException(`admin ${id} not found`)
    }
      return admin;
  }

  remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }
}

  /*
  const adminCollection = database.collection('admin');
  const admins = await adminCollection.find().toArray();
  console.log(admins);
  */
