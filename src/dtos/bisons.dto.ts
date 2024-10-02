import { IsString, IsOptional, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBisonDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  endRestDate?: string;

  @IsNumber()
  kilometersTraveled: number;

  @IsOptional()
  @IsNumber()
  idCarrier?: number; // Relación opcional con Carrier
}

export class UpdateBisonDto extends PartialType(CreateBisonDto) {}
