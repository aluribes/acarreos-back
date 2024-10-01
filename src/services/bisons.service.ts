import { Injectable } from '@nestjs/common';
import { CreateBisonDto } from './dto/create-bison.dto';
import { UpdateBisonDto } from './dto/update-bison.dto';

@Injectable()
export class BisonsService {
  create(createBisonDto: CreateBisonDto) {
    return 'This action adds a new bison';
  }

  findAll() {
    return `This action returns all bisons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bison`;
  }

  update(id: number, updateBisonDto: UpdateBisonDto) {
    return `This action updates a #${id} bison`;
  }

  remove(id: number) {
    return `This action removes a #${id} bison`;
  }
}
