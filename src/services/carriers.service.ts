import { Injectable } from '@nestjs/common';
import { CreateCarrierDto } from '../dtos/carriers.dto';
import { UpdateCarrierDto } from '../dtos/carriers.dto';

@Injectable()
export class CarriersService {
  create(createCarrierDto: CreateCarrierDto) {
    return 'This action adds a new carrier';
  }

  findAll() {
    return `This action returns all carriers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrier`;
  }

  update(id: number, updateCarrierDto: UpdateCarrierDto) {
    return `This action updates a #${id} carrier`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrier`;
  }
}
