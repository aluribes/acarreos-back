import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCarrierDto {
  @IsString()
  username: string;

  @IsString()
  rol: string;
}

export class UpdateCarrierDto extends PartialType(CreateCarrierDto) {}
