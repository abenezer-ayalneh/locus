import { IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class GetLocusDto {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  id?: number

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  assemblyId?: number

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  regionId?: number

  @IsString()
  @IsOptional()
  membershipStatus?: string
}
