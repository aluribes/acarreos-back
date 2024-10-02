import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ShipmentsService } from '../services/shipments.service';
import { CreateShipmentDto } from '../dtos/shipments.dto';
import { UpdateShipmentDto } from '../dtos/shipments.dto';

@ApiTags('shipments')
@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Post()
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }

  @Get()
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipmentDto: UpdateShipmentDto) {
    return this.shipmentsService.update(id, updateShipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentsService.remove(id);
  }

  // Nuevo endpoint para encontrar el estado a partir del guideCode
  @Get('status/:guideCode')
  @ApiOperation({ summary: 'Get status by guideCode' })
  async findStatusByGuideCode(@Param('guideCode') guideCode: number) {
    return this.shipmentsService.findStatusByGuideCode(guideCode);
  }
}
