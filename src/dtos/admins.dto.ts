import { IsString, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAdminDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  photo?: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
