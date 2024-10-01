import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAdminDto {
  @IsString()
  username: string;

  @IsString()
  rol: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
