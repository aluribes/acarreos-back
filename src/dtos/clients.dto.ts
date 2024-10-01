import { IsString, IsEmail, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  defaultLocation?: string;

  @IsString()
  password: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
