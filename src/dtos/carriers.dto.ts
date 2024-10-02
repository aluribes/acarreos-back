import { IsString, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCarrierDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  rol: string;

  @IsOptional()
  @IsUrl()
  photo?: string;
}

export class UpdateCarrierDto extends PartialType(CreateCarrierDto) {}
