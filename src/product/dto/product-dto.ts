import { IsArray, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class DefaultProduct {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    defaultImage: string;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;

}

export class FindProductByColor {
    @IsNumber()
    colorId: number
}
export class FindProductBySearchParams {
    @IsString()
    @IsOptional()
    brandId?: string

    @IsOptional()
    screenType?: string

    @IsString()
    @IsOptional()
    memory?: string

    @IsString()
    page: string

}