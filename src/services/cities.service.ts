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

  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
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

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }

  getCities(){
    const cityCollection = this.database.collection('city');
    return cityCollection.find().toArray();
  }
}

/*
  const cityCollection = database.collection('city');
  const cities = await cityCollection.find().toArray();
  console.log(cities);
  */
