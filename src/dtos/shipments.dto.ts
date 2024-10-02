import { IsString, IsNumber, IsOptional, IsDecimal, IsDateString } from 'class-validator';
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

  @IsDecimal()
  cost: number;

  @IsDateString()
  requestDate: string;

  @IsDateString()
  lastUpdateDate: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  moveSize?: string;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  altura?: number;

  @IsOptional()
  @IsNumber()
  largo?: number;

  @IsOptional()
  @IsNumber()
  ancho?: number;

  @IsString()
  originAddress: string;

  @IsString()
  destinationAddress: string;

  @IsNumber()
  idClient: number;

  @IsNumber()
  idBison: number;

  @IsNumber()
  idCarrier: number;
}

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}
