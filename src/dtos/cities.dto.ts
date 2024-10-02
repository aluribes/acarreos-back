import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCityDto {
  @IsNumber()
  idCity: number;

  @IsString()
  nameCity: string;

  @IsNumber()
  idRegion: number;

  @IsString()
  nameRegion: string;

  @IsNumber()
  idNation: number;

  @IsString()
  nameNation: string;

  @IsOptional()
  @IsUrl()
  imgNation?: string;
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
