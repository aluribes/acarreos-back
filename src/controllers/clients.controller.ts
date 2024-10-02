import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto, UpdateClientDto, AddShipmentsToClientDto } from '../dtos/clients.dto';
import { MongoIdPipe } from '../common/mongo-id/mongo-id.pipe';

// @ApiOperation({ summary: 'description of the method' }) after each method call decorator

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Put(':id/shipments')
  updateShipments(
    @Param('id') id: string,
    @Body() payload: AddShipmentsToClientDto,
  ) {
    return this.clientsService.addShipments(id, payload.shipmentsIds);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }

  @Delete(':id/shipment/:shipmentId')
  removeShipment(
    @Param('id') id: string,
    @Param('shipmentId') shipmentId: string,
  ) {
    return this.clientsService.removeShipment(id, shipmentId);
  }
}
