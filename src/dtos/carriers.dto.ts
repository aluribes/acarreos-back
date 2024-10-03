import { IsString, IsOptional, IsUrl, IsArray, IsMongoId } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

export class CreateCarrierDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  rol: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  photo?: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({ description: 'List of shipment IDs' })
  readonly shipments: string[];

  @IsOptional()
  @IsMongoId()
  readonly bison: string;
}

export class UpdateCarrierDto extends PartialType(
  OmitType(CreateCarrierDto, ['shipments'])
) {}

export class AddShipmentsToCarrierDto {
  @IsArray()
  @IsMongoId({ each: true }) // Asegura que todos los elementos del array sean IDs válidos de MongoDB
  @ApiProperty({ type: [String], description: 'List of shipment IDs to add to the carrier' })
  shipmentsIds: string[];
}