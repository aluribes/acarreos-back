import { IsString, IsNumber, IsOptional, IsDecimal } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateShipmentDto {
  @IsNumber()
  guideCode: number;

  @IsNumber()
  idOriginCity: number;

  @IsNumber()
  idDestinationCity: number;

  @IsString()
  status: string;

  @IsString()
  type: string;

  @IsNumber()
  idLastCity: number;

  @IsDecimal()
  cost: number;

  @IsString()
  requestDate: string;

  @IsString()
  lastUpdateDate: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}
