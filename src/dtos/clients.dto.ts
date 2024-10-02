import { IsString, IsEmail, IsOptional, IsUrl, IsArray } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

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
  readonly shipments: string[];
}

export class UpdateClientDto extends PartialType(
  OmitType(CreateClientDto, ['shipments'])
) {}

export class AddShipmentsToClientDto {
  @IsOptional()
  @IsArray()
  readonly shipmentsIds: string[];
}
