import { IsString, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

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
}

export class UpdateCarrierDto extends PartialType(CreateCarrierDto) {}
