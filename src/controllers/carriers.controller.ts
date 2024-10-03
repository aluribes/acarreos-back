import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CarriersService } from '../services/carriers.service';
import { CreateCarrierDto, UpdateCarrierDto, AddShipmentsToCarrierDto } from '../dtos/carriers.dto';
import { MongoIdPipe } from '../common/mongo-id/mongo-id.pipe';

@ApiTags('carriers')
@Controller('carriers')
export class CarriersController {
  constructor(private readonly carriersService: CarriersService) {}

  @Post()
  create(@Body() createCarrierDto: CreateCarrierDto) {
    return this.carriersService.create(createCarrierDto);
  }

  @Get()
  findAll() {
    return this.carriersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.carriersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrierDto: UpdateCarrierDto) {
    return this.carriersService.update(id, updateCarrierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carriersService.remove(id);
  }

  @Delete(':id/shipment/:shipmentId')
  removeShipment(
    @Param('id') id: string,
    @Param('shipmentId') shipmentId: string,
  ) {
    return this.carriersService.removeShipment(id, shipmentId);
  }

  @Put(':id/shipments')
  updateShipments(
    @Param('id') id: string,
    @Body() payload: AddShipmentsToCarrierDto,
  ) {
    return this.carriersService.addShipments(id, payload.shipmentsIds);
  }

  @Get(':id/shipments')
  @ApiOperation({ summary: 'Get shipments for a specific carrier' })
  findShipmentsByCarrier(@Param('id', MongoIdPipe) id: string) {
    return this.carriersService.findShipmentsByCarrier(id);
  }
}
