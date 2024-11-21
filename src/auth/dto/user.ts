import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsString()
  @ApiProperty({
    default: '12345',
  })
  @MinLength(5, { message: 'Must be a 5 characters' })
  password: string;
}
export class LoginAuthDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    default: '12345',
  })
  @MinLength(5, { message: 'Must be a 5 characters' })
  password: string;
}

export class Location {
  @IsString()
  @IsOptional()
  ip?: string;

  @IsString()
  @IsOptional()
  hostname?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  region?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  loc?: string;

  @IsString()
  @IsOptional()
  org?: string;

  @IsString()
  @IsOptional()
  postal?: string;

  @IsString()
  @IsOptional()
  timezone?: string;
}
