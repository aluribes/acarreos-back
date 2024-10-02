import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BisonsService } from '../services/bisons.service';
import { CreateBisonDto } from '../dtos/bisons.dto';
import { UpdateBisonDto } from '../dtos/bisons.dto';

// @ApiOperation({ summary: 'description of the method' }) after each method call decorator

@ApiTags('bisons')
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

  @Get('/all_bisons/') // http://localhost:3000/bisons/all_bisons
  getBisons() {
    return this.bisonsService.getBisons();
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
