import { IsString, IsOptional, IsNumber, IsMongoId} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBisonDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  status: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  endRestDate?: string;

  @IsNumber()
  @ApiProperty()
  kilometersTraveled: number;

  @IsOptional()
  @IsMongoId()
  readonly carrier: string;

}

export class UpdateBisonDto extends PartialType(CreateBisonDto) {}
