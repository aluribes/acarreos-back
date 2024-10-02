import { Injectable, Inject } from '@nestjs/common';
import { CreateCityDto } from '../dtos/cities.dto';
import { UpdateCityDto } from '../dtos/cities.dto';
import { Db } from 'mongodb';

@Injectable()
export class CitiesService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}

  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
  }

  findAll() {
    return `This action returns all cities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
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
