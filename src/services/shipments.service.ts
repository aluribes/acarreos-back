import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from '../dtos/shipments.dto';
import { UpdateShipmentDto } from '../dtos/shipments.dto';

@Injectable()
export class ShipmentsService {
  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
  }

  findAll() {
    return `This action returns all shipments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipment`;
  }

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }
}
