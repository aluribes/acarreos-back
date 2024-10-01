import { Injectable } from '@nestjs/common';
import { CreateBisonDto } from '../dtos/bisons.dto';
import { UpdateBisonDto } from '../dtos/bisons.dto';

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
