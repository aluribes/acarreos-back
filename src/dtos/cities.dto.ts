import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCityDto {
  @IsNumber()
  @ApiProperty()
  idCity: number;

  @IsString()
  @ApiProperty()
  nameCity: string;

  @IsNumber()
  @ApiProperty()
  idRegion: number;

  @IsString()
  @ApiProperty()
  nameRegion: string;

  @IsNumber()
  @ApiProperty()
  idNation: number;

  @IsString()
  @ApiProperty()
  nameNation: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  imgNation?: string;
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
