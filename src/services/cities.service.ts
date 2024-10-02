import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCityDto } from '../dtos/cities.dto';
import { UpdateCityDto } from '../dtos/cities.dto';
import { City } from '../entities/city.entity';

import { Db } from 'mongodb';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(City.name) private cityModel: Model<City>,
  ) {}

  create(data: CreateCityDto) {
    const newCity= new this.cityModel(data)
    return newCity.save();
  }

  findAll() {
    return this.cityModel.find().exec();
  }

  async findOne(id: string) {
    const city = await this.cityModel.findById(id).exec();
    if (!city){
      throw new NotFoundException(`city ${id} not found`)
    }
      return city;
  }

  update(id: string, changes: UpdateCityDto) {
    const city = this.cityModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    if (!city){
      throw new NotFoundException(`city ${id} not found`)
    }
      return city;
  }

  remove(id: string) {
    return this.cityModel.findByIdAndDelete(id);
  }
}

/*
  const cityCollection = database.collection('city');
  const cities = await cityCollection.find().toArray();
  console.log(cities);
  */
