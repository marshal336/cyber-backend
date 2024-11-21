import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class Steps {
  @ApiPropertyOptional({ description: 'Country name', default: 'UA' })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiPropertyOptional({ description: 'Country name', default: 'Kiyv' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional({ description: 'House or building number', default: '+2121212332' })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiPropertyOptional({ description: 'Street name', default: 'sdsdsdsdsdsd' })
  @IsString()
  @IsOptional()
  street?: string;

  @ApiPropertyOptional({ description: 'Shipment method identifier', default: 1 })
  @IsNumber()
  @IsOptional()
  shipmentMethodId?: number;

  @ApiPropertyOptional({ description: 'Shipment method identifier', default: '' })
  @IsString()
  transactionId: string;

  @ApiProperty({ default: Status['PENDING'], enum: Status })
  @IsEnum(Status)
  status: Status;
}
