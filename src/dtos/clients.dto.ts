import { IsString, IsEmail, IsOptional, IsUrl, IsArray, IsMongoId } from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class CreateClientDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  photo?: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({ description: 'List of shipment IDs' })
  readonly shipments: string[];
}

export class UpdateClientDto extends PartialType(
  OmitType(CreateClientDto, ['shipments'])
) {}

export class AddShipmentsToClientDto {
  @IsArray()
  @IsMongoId({ each: true }) // Asegura que todos los elementos del array sean IDs válidos de MongoDB
  @ApiProperty({ type: [String], description: 'List of shipment IDs to add to the client' })
  shipmentsIds: string[];
}
