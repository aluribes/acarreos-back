import { IsString, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAdminDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsUrl()
  photo?: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
