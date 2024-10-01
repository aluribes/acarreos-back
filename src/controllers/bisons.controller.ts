import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BisonsService } from '../services/bisons.service';
import { CreateBisonDto } from './dto/create-bison.dto';
import { UpdateBisonDto } from './dto/update-bison.dto';

@Controller('bisons')
export class BisonsController {
  constructor(private readonly bisonsService: BisonsService) {}

  @Post()
  create(@Body() createBisonDto: CreateBisonDto) {
    return this.bisonsService.create(createBisonDto);
  }

  @Get()
  findAll() {
    return this.bisonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bisonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBisonDto: UpdateBisonDto) {
    return this.bisonsService.update(+id, updateBisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bisonsService.remove(+id);
  }
}
