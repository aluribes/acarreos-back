import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CarriersService } from '../services/carriers.service';
import { CreateCarrierDto } from '../dtos/carriers.dto';
import { UpdateCarrierDto } from '../dtos/carriers.dto';

// @ApiOperation({ summary: 'description of the method' }) after each method call decorator

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

  @Get('/all_carriers/') // http://localhost:3000/carriers/all_carriers
  getCarriers() {
    return this.carriersService.getCarriers();
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carriersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrierDto: UpdateCarrierDto) {
    return this.carriersService.update(+id, updateCarrierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carriersService.remove(+id);
  }
}
