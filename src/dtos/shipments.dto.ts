import { IsString, IsNumber, IsOptional, IsDecimal, IsDateString, IsMongoId } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateShipmentDto {
  @IsNumber()
  @ApiProperty()
  guideCode: number;

  @IsNumber()
  @ApiProperty()
  idOriginCity: number;

  @IsNumber()
  @ApiProperty()
  idDestinationCity: number;

  @IsString()
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  type: string;

  @IsDecimal()
  @ApiProperty()
  cost: number;

  @IsDateString()
  @ApiProperty()
  requestDate: string;

  @IsDateString()
  @ApiProperty()
  lastUpdateDate: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  moveSize?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  weight?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  altura?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  largo?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  ancho?: number;

  @IsString()
  @ApiProperty()
  originAddress: string;

  @IsString()
  @ApiProperty()
  destinationAddress: string;

  @IsNumber()
  @ApiProperty()
  idClient: number;

  @IsNumber()
  @ApiProperty()
  idBison: number;

  @IsNumber()
  @ApiProperty()
  idCarrier: number;

  @IsMongoId()
  readonly originCity: string;

  @IsMongoId()
  readonly destinationCity: string;

  @IsMongoId()
  readonly client: string;

  @IsMongoId()
  readonly bison: string;

  @IsMongoId()
  readonly carrier: string;
}

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}
