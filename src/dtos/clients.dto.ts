import { IsString, IsEmail, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsUrl()
  photo?: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
